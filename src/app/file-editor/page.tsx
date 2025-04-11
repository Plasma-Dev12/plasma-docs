"use client";
import React, { useState, useRef, ReactElement } from "react";
import Title from "@/components/layout-elements/Title";
import Paragraph from "@/components/layout-elements/Paragraph";
import Topic from "@/components/layout-elements/Topic";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import Spacer from "@/components/layout-elements/Spacer";
import Content from "@/components/layout-elements/Content";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"


// ----------------- Tipos e Interfaces -----------------
interface Block {
  id: number;
  type: string;
  content: string;
  props: Record<string, any>;
  children: Block[];
}

interface EditableProp {
  key: string;
  label: string;
  type: "text" | "select" | "checkbox";
  options?: string[];
}

interface ComponentMeta {
  displayName: string;
  defaultProps: Record<string, any>;
  editableProps: EditableProp[];
  contentEditable: boolean;
  supportsChildren: boolean;
}

// ----------------- Mapeamento dos Componentes e Metadados -----------------
const COMPONENTS: Record<string, React.ElementType> = {
  Title,
  Paragraph,
  Topic,
  List,
  ListItem,
  Spacer,
  Content,
};

const COMPONENT_META: Record<string, ComponentMeta> = {
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

// ----------------- Funções Auxiliares para Manipular a Árvore de Blocos -----------------
function updateBlockById(
  blocks: Block[],
  id: number,
  updater: (block: Block) => Block
): Block[] {
  return blocks.map((block) => {
    if (block.id === id) {
      return updater(block);
    } else if (block.children && block.children.length > 0) {
      return {
        ...block,
        children: updateBlockById(block.children, id, updater),
      };
    } else {
      return block;
    }
  });
}

function removeBlockById(blocks: Block[], id: number): Block[] {
  const newBlocks: Block[] = [];
  for (let block of blocks) {
    if (block.id === id) {
      // ignora
      continue;
    } else if (block.children && block.children.length > 0) {
      newBlocks.push({
        ...block,
        children: removeBlockById(block.children, id),
      });
    } else {
      newBlocks.push(block);
    }
  }
  return newBlocks;
}

function insertBlockAfter(
  blocks: Block[],
  id: number,
  newBlock: Block
): Block[] {
  let found = false;
  const newBlocks: Block[] = [];
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

function findBlockById(blocks: Block[], id: number): Block | null {
  for (let block of blocks) {
    if (block.id === id) return block;
    if (block.children && block.children.length > 0) {
      const found = findBlockById(block.children, id);
      if (found) return found;
    }
  }
  return null;
}

function flattenBlocks(blocks: Block[]): Block[] {
  let result: Block[] = [];
  for (let block of blocks) {
    result.push(block);
    if (block.children && block.children.length > 0) {
      result = result.concat(flattenBlocks(block.children));
    }
  }
  return result;
}

// ----------------- Componente Principal -----------------
export default function PageEditor() {
  const [blocks, setBlocks] = useState<Block[]>([
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
            "Este é um parágrafo muito interessante que fala sobre  vários assuntos. Este é um parágrafo muito interessante que fala sobre  vários assuntos.Este é um parágrafo muito interessante que fala sobre  vários assuntos.",
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
  ]);
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);
  const [newChildType, setNewChildType] = useState<string>(DEFAULT_BLOCK_TYPE);
  const blockRefs = useRef<Record<number, HTMLElement | null>>({});

  // --------- Handlers de Edição ----------
  const handleBlockContentBlur = (
    e: React.FocusEvent<HTMLDivElement>,
    blockId: number
  ) => {
    const newContent = e.target.innerText;
    setBlocks((prev) =>
      updateBlockById(prev, blockId, (block) => ({
        ...block,
        content: newContent,
      }))
    );
  };

  const handleBlockKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    blockId: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newBlock: Block = {
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
    } else if (
      e.key === "Backspace" &&
      e.currentTarget.innerText.trim() === ""
    ) {
      e.preventDefault();
      const flat = flattenBlocks(blocks);
      const currentIndex = flat.findIndex((b) => b.id === blockId);
      if (flat.length > 1) {
        setBlocks((prev) => removeBlockById(prev, blockId));
        let newFocusBlock: Block | null = null;
        if (currentIndex > 0) {
          newFocusBlock = flat[currentIndex - 1];
        } else if (flat.length > currentIndex + 1) {
          newFocusBlock = flat[currentIndex + 1];
        }
        if (newFocusBlock) {
          setSelectedBlockId(newFocusBlock.id);
          setTimeout(() => {
            blockRefs.current[newFocusBlock!.id]?.focus();
          }, 0);
        }
      }
    }
  };

  // Adiciona um novo bloco filho no bloco selecionado
  const handleAddNewChild = () => {
    if (!selectedBlockId) return;
    const newChild: Block = {
      id: Date.now(),
      type: newChildType,
      content: "",
      props: COMPONENT_META[newChildType].defaultProps || {},
      children: [],
    };
    setBlocks((prev) =>
      updateBlockById(prev, selectedBlockId, (block) => ({
        ...block,
        children: [...(block.children || []), newChild],
      }))
    );
    setSelectedBlockId(newChild.id);
    setTimeout(() => blockRefs.current[newChild.id]?.focus(), 0);
  };

  // Atualiza uma propriedade do bloco selecionado
  const handlePropChange = (propKey: string, value: any) => {
    if (!selectedBlockId) return;
    setBlocks((prev) =>
      updateBlockById(prev, selectedBlockId, (block) => ({
        ...block,
        props: { ...block.props, [propKey]: value },
      }))
    );
  };

  // Atualiza o tipo do bloco selecionado (redefinindo as props com defaults)
  const handleBlockTypeChange = (newType: string) => {
    if (!selectedBlockId) return;
    setBlocks((prev) =>
      updateBlockById(prev, selectedBlockId, (block) => ({
        ...block,
        type: newType,
        props: COMPONENT_META[newType].defaultProps || {},
      }))
    );
  };

  // Busca o bloco selecionado para exibição na sidebar
  const selectedBlock = findBlockById(blocks, selectedBlockId!);

  // -------------- Renderiza Recursivamente um Bloco --------------
  const renderBlock = (block: Block): ReactElement => {
    const meta = COMPONENT_META[block.type] || { contentEditable: false };
    const Component = COMPONENTS[block.type] || "div";
    const isSelected = block.id === selectedBlockId;
    return (
      <div
        key={block.id}
        style={{
          // border: isSelected ? "1px dashed white" : "none",
          padding: "4px",
          marginBottom: "4px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedBlockId(block.id);
        }}
        className="editable-inline"
      >
        <Component {...block.props}
         contentEditable
         suppressContentEditableWarning
         ref={(el) => {
           blockRefs.current[block.id] = el;
           return;
         }}
         onBlur={(e) => handleBlockContentBlur(e, block.id)}
         onKeyDown={(e) => handleBlockKeyDown(e, block.id)}              
         // style={{ minHeight: "1.2em", outline: "none", display: "inline", textIndent: "16px" }}
         // className="min-h-[1.2em] outline-none inline"  
        >
          {meta.contentEditable ? (            
              block.content
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

  // -------------- Retorno Principal --------------
  return (
    <div className="flex flex-row mt-24 w-fit mx-auto text-[#F5F5F5]">
      {/* Área do Editor */}
      <div
        className="p-5 w-[800px] mr-[420px]"
        onClick={() => setSelectedBlockId(null)}
      >
        {blocks.map((block) => renderBlock(block))}
      </div>

      {/* Sidebar de Propriedades e Ações */}
      <div
        className="p-5 fixed w-[400px] h-fit bg-[#F5F5F5]/10 rounded-lg ml-5"
        style={{ right: "calc((100% - 1220px)/2)" }}
      >
        <h3 className="font-bold text-xl">Propriedades do Bloco</h3>
        {selectedBlock ? (
          <>            
            {/* Seletor para alterar o tipo do componente */}
            <div className="py-5 mb-5 border-b border-gray-300">
              <label className="flex justify-between items-center gap-2">
                <strong>Tipo do Componente:</strong>{" "}
                <Select
                  value={selectedBlock.type}
                  onValueChange={handleBlockTypeChange}
                >
                  <SelectTrigger size="sm" className="w-[180px]">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(COMPONENT_META).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>
            </div>
            {COMPONENT_META[selectedBlock.type] &&
            COMPONENT_META[selectedBlock.type].editableProps.length > 0 ? (
              COMPONENT_META[selectedBlock.type].editableProps.map((prop) => (
                <div key={prop.key} className="mb-2">
                  <label className="flex items-center gap-2">
                    <span className="flex-1 whitespace-nowrap">{prop.label}:</span>{" "}
                    {prop.type === "select" ? (
                      <Select
                        value={selectedBlock.props[prop.key] || ""}
                        onValueChange={(value) =>
                          handlePropChange(prop.key, value)
                        }
                      >
                        <SelectTrigger size="sm" className="w-[180px]">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          {prop.options?.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : prop.type === "checkbox" ? (
                      <Checkbox
                        checked={selectedBlock.props[prop.key] || false}
                        onCheckedChange={(e) => 
                            handlePropChange(prop.key, e)                            
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
            {/* Área para inserir um novo componente filho se for suportado */}
            {COMPONENT_META[selectedBlock.type]?.supportsChildren ? (
              <div className="mt-5 pt-5 flex flex-col w-full justify-end border-t border-gray-300">
                <div className="mb-2">                
                  <h4 className="font-semibold">Novo Componente Filho</h4>
                  <label className="flex items-center justify-between gap-2 mt-2">
                    Tipo:{" "}
                    <Select
                      value={newChildType}
                      onValueChange={setNewChildType}
                    >
                      <SelectTrigger size="sm" className="w-[180px]">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(COMPONENT_META).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </label>
                </div>
                <Button size={"sm"} variant="outline" onClick={handleAddNewChild}>
                  Adicionar
                </Button>
              </div>
            ) : (
              <div className="mt-2 mb-5">
                <p>O bloco selecionado não suporta filhos.</p>
              </div>
            )}
          </>
        ) : (
          <p className="mt-2">Selecione um bloco para editar suas propriedades.</p>
        )}
      </div>
    </div>
  );
}
