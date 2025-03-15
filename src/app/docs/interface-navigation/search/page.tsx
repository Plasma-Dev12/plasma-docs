import Image from "next/image";
import searchBarImage from "@/assets/search-bar.png";
import Content from "@/components/Content";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import TopicTitle from "@/components/TopicTitle";
import Topic from "@/components/Topic";
import Spacer from "@/components/Spacer";
import TopicContent from "@/components/TopicContent";
import List from "@/components/List";
import ListItem from "@/components/ListItem";

export default function Page() {
  return (
    <>
      <Title>Navbar</Title>
      <Content>
        <Content>
          <Image
            id="navbar"
            className="w-full"
            src={searchBarImage}
            alt="Header image"
          />
          <Paragraph>
            A funcionalidade de busca no GitHub é uma ferramenta poderosa que
            permite localizar uma vasta gama de informações, como repositórios,
            usuários, commits, issues, pull requests e mais. Com suporte a busca
            avançada, ela pode ser personalizada por meio de operadores de
            pesquisa para encontrar exatamente o que você precisa. Aqui está um
            detalhamento:
          </Paragraph>
        </Content>
        <TopicContent>
          <TopicTitle>Localização da Ferramenta de Busca</TopicTitle>
          <Paragraph>
            A barra de busca, localizada no topo da interface do GitHub, está
            sempre acessível para facilitar a navegação. Além disso, você pode
            acessá-la rapidamente ao pressionar a tecla "/" no teclado,
            permitindo que comece a digitar imediatamente.
          </Paragraph>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Tipos de Busca Disponíveis</TopicTitle>
          <Paragraph>
            <Topic title="Repositórios">
              Encontre repositórios públicos ou privados que contenham
              palavras-chave específicas.
            </Topic>
            <Spacer>
              <Topic title="Exemplos">
                machine learning language: python → Retorna repositórios com
                "machine learning" que usam Python.
              </Topic>
            </Spacer>
          </Paragraph>
          <Topic title="Função">
            Permite ao usuário realizar pesquisas avançadas por repositórios,
            usuários, commits e mais. Suporta operadores de busca como author:,
            is:open, entre outros. Atalho útil: Pressione “/” no teclado para
            ativar a barra de pesquisa.
          </Topic>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Ícones Funcionais (lado direito da barra)</TopicTitle>
          <List type="decimal">
            <ListItem>Sino de Notificações:</ListItem>
            <Topic title="Função">
              exibe notificações relacionadas a issues, pull requests e outros
              eventos dos repositórios acompanhados. Quando há notificações
              pendentes, um contador aparece indicando o número de itens não
              lidos.
            </Topic>
            <ListItem>Ícone de "+"</ListItem>
            <Topic title="Função">
              Abre um menu suspenso com opções para criar:
            </Topic>
          </List>

          <List type="disc">
            <Topic title="New repository">
              Cria um novo repositório para armazenar e gerenciar código. É
              possível configurar a visibilidade (público ou privado) e
              adicionar arquivos iniciais, como um README ou .gitignore.
            </Topic>
            <Topic title="Import repository">
              Permite importar um repositório externo para o GitHub, útil para
              migrar projetos hospedados em outros serviços ou servidores Git.
            </Topic>
            <Topic title="New codespace">
              Inicia um novo ambiente de desenvolvimento remoto usando GitHub
              Codespaces, permitindo editar código diretamente no navegador com
              um ambiente pré-configurado.
            </Topic>
            <Topic title="New gist">
              Cria um novo Gist, que pode ser público ou secreto. Gists são
              trechos de código compartilháveis, úteis para armazenar scripts,
              notas e exemplos rápidos.
            </Topic>
            <Topic title="New organization">
              Cria uma nova organização no GitHub, que permite gerenciar
              repositórios, permissões e equipes de forma colaborativa.
            </Topic>
            <Topic title="New project">
              Cria um novo projeto no GitHub Projects, permitindo organizar
              tarefas e acompanhar o progresso usando quadros, listas e tabelas.
            </Topic>
          </List>
          <p className="text-lg ml-10">
            Essa seção facilita a criação e organização de novos conteúdos
            diretamente pelo header do GitHub.
          </p>
        </TopicContent>
        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-3xl font-bold text-start">
            Icone de Perfil do Usuáro
          </h2>
          <p className="text-lg">
            <span className="font-bold">Função: </span>Abre um menu suspenso com
            opções como{" "}
            <span className="font-bold">Configurações da conta</span>,
            <span className="font-bold">
              Alternar entre diferentes organizações ou equipes
            </span>{" "}
            e <span className="font-bold">Sair da conta</span>.
          </p>
        </div>
      </Content>
    </>
  );
}
