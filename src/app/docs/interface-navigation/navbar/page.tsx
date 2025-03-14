import Image from "next/image";
import headerExample from "@/assets/navbarImage.png";
import githubIcon from "@/assets/githubLogo.png";
import plusOptions from "@/assets/plusFunctions.png";

export default function Page() {
  return (
    <>
      <div className="text-[#F5F5F5] flex justify-start items-center">
        <div className="flex flex-col justify-center items-start gap-20">
          <h1 className="text-4xl font-bold text-start w-full">Navbar</h1>
          <div className="flex flex-col justify-center items-start gap-10">
            <Image
              id="navbar"
              className="md:min-w-[800px]"
              src={headerExample}
              alt="Header image"
            />
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex justify-start items-center gap-10">
                <h2 className="text-3xl font-bold text-start">
                  Logotipo do GitHub
                </h2>
                <Image
                  src={githubIcon}
                  alt="Github logo"
                  className="w-[60px]"
                />
              </div>
              <p className="max-w-[800px] text-lg">
                Um clique no logotipo leva o usuário diretamente para o painel
                principal (Dashboard), onde é possível visualizar repositórios
                recentes, atividades e recomendações personalizadas
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-3xl font-bold text-start w-full">Titulo</h2>
            <p className="max-w-[800px] text-lg">
              Indica em que página o usuário está
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-3xl font-bold text-start w-full">
              Barra de Pesquisa
            </h2>
            <p className="max-w-[800px] text-lg">
              <span className="font-bold">Aparência:</span> Exibe um espaço para
              busca com o texto placeholder "Type / to search".
            </p>
            <p className="max-w-[800px] text-lg">
              <span className="font-bold">Função:</span> Permite ao usuário
              realizar pesquisas avançadas por repositórios, usuários, commits e
              mais. Suporta operadores de busca como author:, is:open, entre
              outros. Atalho útil: Pressione “/” no teclado para ativar a barra
              de pesquisa.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-3xl font-bold text-start w-full">
              Ícones Funcionais (lado direito da barra)
            </h2>
            <p className="font-bold max-w-[800px] text-lg">
              1. Sino de Notificações:
            </p>
            <p className="max-w-[800px] text-lg ml-10">
              <span className="font-bold">Função:</span> Exibe notificações
              relacionadas a issues, pull requests e outros eventos dos
              repositórios acompanhados. Quando há notificações pendentes, um
              contador aparece indicando o número de itens não lidos.
            </p>
            <p className="font-bold max-w-[800px] text-lg">2. Ícone de "+"</p>
            <p className="max-w-[800px] text-lg ml-10">
              <span className="font-bold">Função:</span> Abre um menu suspenso
              com opções para criar:
            </p>
            <Image className="no-drag ml-10" alt="Icons" src={plusOptions} />
            <ul className="max-w-[800px] text-lg ml-16 list-disc">
              <li>
                <span className="font-bold">New repository -</span> Cria um novo
                repositório para armazenar e gerenciar código. É possível
                configurar a visibilidade (público ou privado) e adicionar
                arquivos iniciais, como um README ou .gitignore.
              </li>
              <li>
                <span className="font-bold">Import repository –</span> Permite
                importar um repositório externo para o GitHub, útil para migrar
                projetos hospedados em outros serviços ou servidores Git.
              </li>
              <li>
                <span className="font-bold">New codespace –</span> Inicia um
                novo ambiente de desenvolvimento remoto usando GitHub
                Codespaces, permitindo editar código diretamente no navegador
                com um ambiente pré-configurado.
              </li>
              <li>
                <span className="font-bold">New gist –</span> Cria um novo Gist,
                que pode ser público ou secreto. Gists são trechos de código
                compartilháveis, úteis para armazenar scripts, notas e exemplos
                rápidos.
              </li>
              <li>
                <span className="font-bold">New organization –</span> Cria uma
                nova organização no GitHub, que permite gerenciar repositórios,
                permissões e equipes de forma colaborativa.
              </li>
              <li>
                <span className="font-bold">New project –</span> Cria um novo
                projeto no GitHub Projects, permitindo organizar tarefas e
                acompanhar o progresso usando quadros, listas e tabelas.
              </li>
            </ul>
            <p className="max-w-[800px] text-lg ml-10">
              Essa seção facilita a criação e organização de novos conteúdos
              diretamente pelo header do GitHub.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-3xl font-bold text-start">
              Icone de Perfil do Usuáro
            </h2>
            <p className="max-w-[800px] text-lg">
              <span className="font-bold">Função: </span>Abre um menu suspenso
              com opções como{" "}
              <span className="font-bold">Configurações da conta</span>,
              <span className="font-bold">
                Alternar entre diferentes organizações ou equipes
              </span>{" "}
              e <span className="font-bold">Sair da conta</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
