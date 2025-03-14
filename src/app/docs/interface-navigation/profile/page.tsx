import Image from "next/image";
import headerExample from "@/assets/navbar.png";
import githubIcon from "@/assets/githubLogo.png";
import plusOptions from "@/assets/plusFunctions.png";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-start w-full mb-10">Perfil</h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <Image
            id="navbar"
            className="no-drag w-full max-w-[1000px]"
            src={headerExample}
            alt="Header image"
          />
          <div className="flex flex-col gap-5">
            <div className="flex justify-start items-center gap-10">
              <h2 className="text-3xl font-bold text-start">
                Logotipo do GitHub
              </h2>
              <Image
                src={githubIcon}
                alt="Github logo"
                className="no-drag w-[60px]"
              />
            </div>
            <p className="w-full text-lg">
              Um clique no logotipo leva o usuário diretamente para o painel
              principal (Dashboard), onde é possível visualizar repositórios
              recentes, atividades e recomendações personalizadas
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Titulo</h2>
          <p className="w-full text-lg">Indica em que página o usuário está</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Barra de Pesquisa</h2>
          <p className="w-full text-lg">
            <b>Aparência:</b> Exibe um espaço para busca com o texto placeholder
            "Type / to search".
          </p>
          <p className="w-full text-lg">
            <b>Função:</b> Permite ao usuário realizar pesquisas avançadas por
            repositórios, usuários, commits e mais. Suporta operadores de busca
            como author:, is:open, entre outros. Atalho útil: Pressione “/” no
            teclado para ativar a barra de pesquisa.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">
            Ícones Funcionais (lado direito da barra)
          </h2>
          <p className="font-bold w-full text-lg">1. Sino de Notificações:</p>
          <p className="w-full text-lg pl-10">
            <b>Função:</b> Exibe notificações relacionadas a issues, pull
            requests e outros eventos dos repositórios acompanhados. Quando há
            notificações pendentes, um contador aparece indicando o número de
            itens não lidos.
          </p>
          <p className="font-bold w-full text-lg">2. Ícone de "+"</p>
          <p className="w-full text-lg pl-10">
            <b>Função:</b> Abre um menu suspenso com opções para criar:
          </p>
          <Image className="no-drag pl-10" alt="Icons" src={plusOptions} />
          <ul className="w-full text-lg pl-16 list-disc flex flex-col gap-5">
            <li>
              <b>New repository -</b> Cria um novo repositório para armazenar e
              gerenciar código. É possível configurar a visibilidade (público ou
              privado) e adicionar arquivos iniciais, como um README ou
              .gitignore.
            </li>
            <li>
              <b>Import repository –</b> Permite importar um repositório externo
              para o GitHub, útil para migrar projetos hospedados em outros
              serviços ou servidores Git.
            </li>
            <li>
              <b>New codespace –</b> Inicia um novo ambiente de desenvolvimento
              remoto usando GitHub Codespaces, permitindo editar código
              diretamente no navegador com um ambiente pré-configurado.
            </li>
            <li>
              <b>New gist –</b> Cria um novo Gist, que pode ser público ou
              secreto. Gists são trechos de código compartilháveis, úteis para
              armazenar scripts, notas e exemplos rápidos.
            </li>
            <li>
              <b>New organization –</b> Cria uma nova organização no GitHub, que
              permite gerenciar repositórios, permissões e equipes de forma
              colaborativa.
            </li>
            <li>
              <b>New project –</b> Cria um novo projeto no GitHub Projects,
              permitindo organizar tarefas e acompanhar o progresso usando
              quadros, listas e tabelas.
            </li>
          </ul>
          <p className="w-full text-lg pl-10">
            Essa seção facilita a criação e organização de novos conteúdos
            diretamente pelo header do GitHub.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-start">
            Icone de Perfil do Usuáro
          </h2>
          <p className="w-full text-lg">
            <b>Função: </b>Abre um menu suspenso com opções como{" "}
            <b>Configurações da conta</b>,
            <b>Alternar entre diferentes organizações ou equipes</b> e{" "}
            <b>Sair da conta</b>.
          </p>
        </div>
      </div>
    </>
  );
}
