import Image from "@/components/Image";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import TopicContent from "@/components/layout-elements/TopicContent";
import Paragraph from "@/components/layout-elements/Paragraph";
import Topic from "@/components/layout-elements/Topic";
import Spacer from "@/components/layout-elements/Spacer";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import Content from "@/components/layout-elements/Content";
import Title from "@/components/layout-elements/Title";
import profilePage from "@/assets/profilePage.png";

export default function ProfilePage() {
  return (
    <>
      <Title>Profile</Title>
      <Content>
        <Paragraph>
          A <b>página de perfil do usuário</b> no GitHub é um espaço onde são
          exibidas informações importantes sobre as atividades, repositórios e
          contribuições de um usuário. Essa página ajuda na apresentação
          profissional e no acompanhamento do histórico de contribuições. A
          seguir, um detalhamento da estrutura e funcionalidades.
        </Paragraph>
        <Image
          className="border-2 rounded-lg image-shadow"
          src={profilePage}
          alt="Profile page"
        />
        <TopicContent>
          <TopicTitle>Estrutura do Perfil do Usuário</TopicTitle>
          <Paragraph>
            A página do perfil é organizada em várias seções para apresentar as
            informações de forma clara e acessível.
          </Paragraph>
          <Spacer>
            <Topic title="1.1 Cabeçalho do Perfil">
              O cabeçalho exibe informações básicas e de destaque do usuário:
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic title="Foto de Perfil e Nome de Usuário">
                  Exibe a imagem de perfil do usuário.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Biografia (Bio)">
                  Espaço para incluir uma breve descrição, como cargo, empresa,
                  localização ou interesses.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Seguidores e Seguindo">
                  Quantidade de seguidores e de usuários seguidos pelo perfil.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Repositórios Estrelados">
                  Contagem de repositórios que o usuário marcou como favoritos
                  (starred repositories)
                </Topic>
              </ListItem>
            </List>
          </Spacer>
          <Spacer>
            <Topic title="1.2 Seção de Repositórios">
              Lista dos repositórios públicos do usuário, com opção de ordenação
              e filtragem.
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic title="Detalhes exibidos">
                  Nome do repositório, Breve descrição (se fornecida), Linguagem
                  principal utilizada e Contagem de estrelas e forks
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Filtros de Repositórios">
                  Permite buscar repositórios por palavras-chave e também
                  oferece uma opção para classificação por tipo de repositório
                  (publico, privado, forks, templates, entre outros), linguagem
                  de programação e um filtro de ordenação (última atualização,
                  por nome e por estrelas).
                </Topic>
              </ListItem>
            </List>
          </Spacer>
          <Spacer>
            <Topic title="1.3 Contribuições Recentes">
              Esta seção apresenta um resumo das atividades do usuário na
              plataforma:
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic title="Gráfico de Contribuições">
                  Um mapa de calor que exibe a frequência de contribuições ao
                  longo do ano, ele inclui atividades como commits, pull
                  requests e issues.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Atividade Recente">
                  Exibe as interações mais recentes do usuário, incluindo:
                  <b>participação em Pull Requests</b>,
                  <b>comentários em issues</b> e
                  <b>contribuições a repositórios públicos</b>.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
          <Spacer>
            <Topic title="1.4 Estatísticas Gerais">
              A seção &quot;Estatísticas Gerais&quot; oferece uma visão geral
              das atividades do usuário no GitHub, incluindo o número de
              contribuições realizadas nos últimos 12 meses, as organizações das
              quais faz parte e a possibilidade de destacar projetos específicos
              no topo do perfil para maior visibilidade.
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic title="Número de Contribuições">
                  Quantidade total de contribuições nos últimos 12 meses.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Organizações">
                  Exibe as organizações das quais o usuário faz parte, com links
                  para seus perfis.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic title="Projetos em Destaque">
                  Permite destacar repositórios específicos no topo do perfil
                  para melhor visibilidade.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
          <Spacer>
            <Topic title="1.5 Estatísticas Gerais">
              O usuário pode personalizar seu perfil com diversas opções, entre
              elas temos:
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic>
                  Alterar foto, bio e links (como site pessoal ou portfólio).
                </Topic>
              </ListItem>
              <ListItem>
                <Topic>Configurar e-mail visível ao público.</Topic>
              </ListItem>
              <ListItem>
                <Topic>Gerenciar configurações de privacidade.</Topic>
              </ListItem>
              <ListItem>
                <Topic>Escolher repositórios para exibição em destaque.</Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Navegação</TopicTitle>
          <Paragraph>
            A página de perfil possui vários elementos que facilitam a
            exploração e acesso a informações:
          </Paragraph>
          <Spacer>
            <Topic title="2.1 Barra Lateral do Perfil">
              Aqui na barra lateral temos algumas opções e atalhos para faciliar
              a navegação, como:
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic>
                  Atalhos para repositórios, organizações e estatísticas
                  detalhadas.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic>Links rápidos para projetos e contribuições.</Topic>
              </ListItem>
            </List>
          </Spacer>
          <Spacer>
            <Topic title="2.2 Links de Conexão">
              Existem algumas opções para podermos adicionar links de
              redirecionamento para aumentar o seu alcançe com outras
              plataformas, portifólios e redes sociais, como:
            </Topic>
            <List type="disc">
              <ListItem>
                <Topic>
                  Links personalizados para redes sociais e portfólios externos.
                </Topic>
              </ListItem>
              <ListItem>
                <Topic>
                  Opção de adicionar um site pessoal para melhor visibilidade
                  profissional.
                </Topic>
              </ListItem>
            </List>
          </Spacer>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Importância do Perfil no GitHub</TopicTitle>
          <Paragraph>
            Com uma página de perfil bem configurada e atualizada, os usuários
            podem aumentar sua visibilidade na comunidade de desenvolvedores e
            atrair mais oportunidades no mercado de trabalho. Ter um perfil bem
            estruturado no GitHub é essencial para:
          </Paragraph>
          <List type="disc">
            <ListItem>
              <Topic title="Demonstração de habilidades">
                Facilita a apresentação de projetos e experiência.
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Networking e oportunidades">
                Permite conexões com outros desenvolvedores e empresas.
              </Topic>
            </ListItem>
            <ListItem>
              <Topic title="Organização profissional">
                Mantém um histórico claro de contribuições e colaborações.
              </Topic>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
