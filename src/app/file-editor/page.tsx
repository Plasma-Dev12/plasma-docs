"use client";
import React, { useState, useRef, useEffect } from "react";
import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";
import Topic from "@/components/layout-elements/Topic";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Spacer from "@/components/layout-elements/Spacer";
import Content from "@/components/layout-elements/Content";

// Mapeia os componentes para renderização
const COMPONENTS = {
    Title,
    Paragraph,
    Topic,
    List,
    ListItem,
    Spacer,
    Content,
  };
  
  // Metadados de cada componente – definem informações como props editáveis, 
  // valores padrão, se o conteúdo é editável e se suporta filhos.
  const COMPONENT_META = {
    Title: {
      displayName: "Title",
      defaultProps: {},
      editableProps: [],
      contentEditable: true,
      supportsChildren: false,
    },
    Paragraph: {
      displayName: "Paragraph",
      defaultProps: {},
      editableProps: [],
      contentEditable: true,
      supportsChildren: false,
    },
    Topic: {
      displayName: "Topic",
      defaultProps: { title: "Detalhes" },
      editableProps: [{ key: "title", label: "Title", type: "text" }],
      contentEditable: true,
      supportsChildren: false,
    },
    List: {
      displayName: "List",
      defaultProps: { type: "disc", spacer: true, compact: false },
      editableProps: [
        {
          key: "type",
          label: "List Type",
          type: "select",
          options: ["disc", "decimal", "topics"],
        },
        { key: "spacer", label: "Spacer", type: "checkbox" },
        { key: "compact", label: "Compact", type: "checkbox" },
      ],
      contentEditable: false,
      supportsChildren: true,
    },
    ListItem: {
      displayName: "ListItem",
      defaultProps: { title: "Detalhes" },
      editableProps: [{ key: "title", label: "Title", type: "text" }],
      contentEditable: true,
      supportsChildren: false,
    },
    Spacer: {
      displayName: "Spacer",
      defaultProps: {},
      editableProps: [],
      contentEditable: false,
      supportsChildren: true,
    },
    Content: {
      displayName: "Content",
      defaultProps: {},
      editableProps: [],
      contentEditable: false,
      supportsChildren: true,
    },
  };
  
  const DEFAULT_BLOCK_TYPE = "Paragraph";
  
  // Exemplo de estrutura inicial com blocos aninhados
  const initialBlocks = [
    {
      id: 1,
      type: "Content",
      content: "",
      props: {},
      children: [
        {
          id: 2,
          type: "Title",
          content: "Meu Título Incrível",
          props: {},
          children: [],
        },
        {
          id: 3,
          type: "Paragraph",
          content:
            "Este é um parágrafo muito interessante que fala sobre vários assuntos.",
          props: {},
          children: [],
        },
        {
          id: 4,
          type: "List",
          content: "",
          props: { type: "disc", spacer: true, compact: false },
          children: [
            {
              id: 5,
              type: "ListItem",
              content: "Item 1",
              props: { title: "Detalhes" },
              children: [],
            },
            {
              id: 6,
              type: "ListItem",
              content: "Item 2",
              props: { title: "Detalhes" },
              children: [],
            },
          ],
        },
      ],
    },
  ];
  
  // Função auxiliar que atualiza recursivamente um bloco com base no id
  function updateBlockById(blocks, id, updater) {
    return blocks.map((block) => {
      if (block.id === id) {
        return updater(block);
      } else if (block.children && block.children.length > 0) {
        return { ...block, children: updateBlockById(block.children, id, updater) };
      } else {
        return block;
      }
    });
  }
  
  // Remove um bloco pelo id (recursivamente)
  function removeBlockById(blocks, id) {
    let newBlocks = [];
    blocks.forEach((block) => {
      if (block.id === id) {
        // ignora o bloco
      } else if (block.children && block.children.length > 0) {
        newBlocks.push({ ...block, children: removeBlockById(block.children, id) });
      } else {
        newBlocks.push(block);
      }
    });
    return newBlocks;
  }
  
  // Insere um novo bloco logo após o bloco com o id informado
  function insertBlockAfter(blocks, id, newBlock) {
    let found = false;
    const newBlocks = [];
    for (let block of blocks) {
      newBlocks.push(block);
      if (block.id === id) {
        newBlocks.push(newBlock);
        found = true;
      } else if (block.children && block.children.length > 0) {
        const newChildren = insertBlockAfter(block.children, id, newBlock);
        if (newChildren !== block.children) {
          newBlocks[newBlocks.length - 1] = { ...block, children: newChildren };
          found = true;
        }
      }
    }
    return found ? newBlocks : blocks;
  }
  
  // Retorna um array "achatado" de blocos (para navegação, por exemplo)
  function flattenBlocks(blocks) {
    let result = [];
    blocks.forEach((block) => {
      result.push(block);
      if (block.children && block.children.length > 0) {
        result = result.concat(flattenBlocks(block.children));
      }
    });
    return result;
  }
  
  // Busca um bloco pelo id (recursivamente)
  function findBlockById(blocks, id) {
    for (let block of blocks) {
      if (block.id === id) return block;
      if (block.children) {
        const found = findBlockById(block.children, id);
        if (found) return found;
      }
    }
    return null;
  }
  
  export default function PageEditor() {
    const [blocks, setBlocks] = useState(initialBlocks);
    const [selectedBlockId, setSelectedBlockId] = useState(null);
    const [newChildType, setNewChildType] = useState("Paragraph");
    const blockRefs = useRef({});
  
    // Atualiza o conteúdo do bloco no onBlur para preservar o caret
    const handleBlockContentBlur = (e, blockId) => {
      const newContent = e.target.innerText;
      setBlocks((prev) =>
        updateBlockById(prev, blockId, (block) => ({ ...block, content: newContent }))
      );
    };
  
    // Trata Enter para inserir novo bloco e Backspace para remover bloco vazio
    const handleBlockKeyDown = (e, blockId) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newBlock = {
          id: Date.now(),
          type: DEFAULT_BLOCK_TYPE,
          content: "",
          props: {},
          children: [],
        };
        setBlocks((prev) => insertBlockAfter(prev, blockId, newBlock));
        setSelectedBlockId(newBlock.id);
        setTimeout(() => {
          blockRefs.current[newBlock.id]?.focus();
        }, 0);
      } else if (e.key === "Backspace") {
        if (e.target.innerText.trim() === "") {
          e.preventDefault();
          const flat = flattenBlocks(blocks);
          const currentIndex = flat.findIndex((b) => b.id === blockId);
          if (flat.length > 1) {
            setBlocks((prev) => removeBlockById(prev, blockId));
            let newFocusBlock = null;
            if (currentIndex > 0) {
              newFocusBlock = flat[currentIndex - 1];
            } else if (flat.length > currentIndex + 1) {
              newFocusBlock = flat[currentIndex + 1];
            }
            if (newFocusBlock) {
              setSelectedBlockId(newFocusBlock.id);
              setTimeout(() => {
                blockRefs.current[newFocusBlock.id]?.focus();
              }, 0);
            }
          }
        }
      }
    };
  
    // Manipula mudanças nos props do bloco selecionado
    const handlePropChange = (propKey, value) => {
      if (!selectedBlockId) return;
      setBlocks((prev) =>
        updateBlockById(prev, selectedBlockId, (block) => ({
          ...block,
          props: { ...block.props, [propKey]: value },
        }))
      );
    };
  
    // Atualiza o tipo do bloco selecionado através do select da sidebar
    const handleBlockTypeChange = (newType) => {
      if (!selectedBlockId) return;
      setBlocks((prev) =>
        updateBlockById(prev, selectedBlockId, (block) => ({
          ...block,
          type: newType,
          // Opcional: reinicializa os props com os defaults do novo tipo
          props: COMPONENT_META[newType].defaultProps || {},
        }))
      );
    };
  
    // Função para adicionar um novo componente como filho do bloco selecionado
    const handleAddNewChild = () => {
      if (!selectedBlockId) return;
      const newBlock = {
        id: Date.now(),
        type: newChildType,
        content: "",
        props: COMPONENT_META[newChildType].defaultProps || {},
        children: [],
      };
      setBlocks((prev) =>
        updateBlockById(prev, selectedBlockId, (block) => ({
          ...block,
          children: [...(block.children || []), newBlock],
        }))
      );
      // Opcionalmente, seleciona o novo bloco e foca nele
      setSelectedBlockId(newBlock.id);
      setTimeout(() => {
        blockRefs.current[newBlock.id]?.focus();
      }, 0);
    };
  
    // Busca o bloco selecionado para exibição na sidebar
    const selectedBlock = findBlockById(blocks, selectedBlockId);
  
    // Renderiza recursivamente um bloco e seus filhos
    const renderBlock = (block) => {
      const meta = COMPONENT_META[block.type] || {};
      const Component = COMPONENTS[block.type] || "div";
      const isSelected = block.id === selectedBlockId;
      return (
        <div
          key={block.id}
          style={{
            border: isSelected ? "1px solid blue" : "none",
            padding: "4px",
            marginBottom: "4px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedBlockId(block.id);
          }}
        >
          <Component {...block.props}>
            {meta.contentEditable ? (
              <div
                contentEditable
                suppressContentEditableWarning
                ref={(el) => (blockRefs.current[block.id] = el)}
                onBlur={(e) => handleBlockContentBlur(e, block.id)}
                onKeyDown={(e) => handleBlockKeyDown(e, block.id)}
                style={{ minHeight: "1.2em", outline: "none" }}
              >
                {block.content}
              </div>
            ) : (
              block.content
            )}
            {block.children && block.children.length > 0 && (
              <div style={{ paddingLeft: "16px" }}>
                {block.children.map((child) => renderBlock(child))}
              </div>
            )}
          </Component>
        </div>
      );
    };
  
    return (
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          color: "#f5f5f5",
        }}
      >
        {/* Área do Editor */}
        <div
          style={{ flex: 2, padding: "20px", border: "1px solid #ccc" }}
          onClick={() => setSelectedBlockId(null)}
        >
          {blocks.map((block) => renderBlock(block))}
        </div>
  
        {/* Sidebar de Propriedades e Ações */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ccc",
            marginLeft: "20px",
          }}
        >
          <h3>Propriedades do Bloco</h3>
          {selectedBlock ? (
            <>
              {/* Área para inserir um novo componente como filho */}
              {COMPONENT_META[selectedBlock.type]?.supportsChildren ? (
                <div
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <h4>Novo Componente</h4>
                  <label>
                    Tipo:{" "}
                    <select
                      value={newChildType}
                      onChange={(e) => setNewChildType(e.target.value)}
                    >
                      {Object.keys(COMPONENT_META).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button onClick={handleAddNewChild} style={{ marginLeft: "10px" }}>
                    Adicionar
                  </button>
                </div>
              ) : (
                <div style={{ marginBottom: "20px" }}>
                  <p>O bloco selecionado não suporta filhos.</p>
                </div>
              )}
              {/* Seletor para alterar o tipo do componente */}
              <div style={{ marginBottom: "10px" }}>
                <label>
                  <strong>Tipo do Componente:</strong>{" "}
                  <select
                    value={selectedBlock.type}
                    onChange={(e) => handleBlockTypeChange(e.target.value)}
                  >
                    {Object.keys(COMPONENT_META).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <p>
                <strong>Tipo atual:</strong> {selectedBlock.type}
              </p>
              {COMPONENT_META[selectedBlock.type] &&
              COMPONENT_META[selectedBlock.type].editableProps.length > 0 ? (
                COMPONENT_META[selectedBlock.type].editableProps.map((prop) => (
                  <div key={prop.key} style={{ marginBottom: "8px" }}>
                    <label>
                      {prop.label}:{" "}
                      {prop.type === "select" ? (
                        <select
                          value={selectedBlock.props[prop.key] || ""}
                          onChange={(e) =>
                            handlePropChange(prop.key, e.target.value)
                          }
                        >
                          {prop.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : prop.type === "checkbox" ? (
                        <input
                          type="checkbox"
                          checked={selectedBlock.props[prop.key] || false}
                          onChange={(e) =>
                            handlePropChange(prop.key, e.target.checked)
                          }
                        />
                      ) : (
                        <input
                          type="text"
                          value={selectedBlock.props[prop.key] || ""}
                          onChange={(e) =>
                            handlePropChange(prop.key, e.target.value)
                          }
                        />
                      )}
                    </label>
                  </div>
                ))
              ) : (
                <p>Sem propriedades editáveis.</p>
              )}
            </>
          ) : (
            <p>Selecione um bloco para editar suas propriedades.</p>
          )}
        </div>
      </div>
    );
  }