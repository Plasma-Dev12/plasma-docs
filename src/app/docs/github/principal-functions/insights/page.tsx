import Content from "@/components/layout-elements/Content";
import Paragraph from "@/components/layout-elements/Paragraph";
import Title from "@/components/layout-elements/Title";
import Image from "next/image";
import insights from "@/assets/insigths.png";
import TopicContent from "@/components/layout-elements/TopicContent";
import TopicTitle from "@/components/layout-elements/TopicTitle";
import List from "@/components/layout-elements/List";
import ListItem from "@/components/layout-elements/ListItem";
import SubTopic from "@/components/layout-elements/SubTopic";

export default function Page() {
  return (
    <>
      <Content>
        <Title>Insights</Title>
        <Content>
          <Paragraph>
            A seção Insights do GitHub fornece métricas e análises detalhadas
            sobre a atividade e o desempenho do repositório, permitindo que
            equipes compreendam tendências e tomem decisões baseadas em dados.
            Aqui está uma explicação completa dos elementos e funcionalidades
            desta página:
          </Paragraph>
          <Image
            className="w-full image-shadow"
            src={insights}
            alt="Insights image"
          />
        </Content>
        <TopicContent>
          <TopicTitle>Visão geral da página de Insights</TopicTitle>
          <List type="disc">
            <ListItem title="Descrição">
              <Paragraph>
                Uma central de dados analíticos que cobre diversas áreas, como
                contribuições, tráfego, dependências e segurança.
              </Paragraph>
            </ListItem>
            <ListItem title="Finalidade">
              <Paragraph>
                Fornecer visibilidade sobre a atividade do repositório e
                identificar áreas de melhoria ou tendências.
              </Paragraph>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Principais Seções da Página Insights</TopicTitle>
          <Paragraph>
            A página Insights é dividida em subseções específicas, cada uma com
            suas próprias métricas e informações:
          </Paragraph>
          <List type="disc">
            <SubTopic>Pulse</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Mostra um resumo rápido da atividade recente no repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Informações Apresentadas">
              <List type="disc">
                <ListItem>
                  <Paragraph>Número de commits recentes.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>Issues abertas e fechadas.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>Pull Requests abertas e mescladas.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>Atividade geral dos colaboradores.</Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <SubTopic>Contributors (Contribuidores)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Fornece detalhes sobre a contribuição individual de cada
                colaborador ao repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Dados Incluídos">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Quantidade de commits, adições e remoções feitas por cada
                    colaborador.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Gráficos que mostram a atividade ao longo do tempo.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Comparação de contribuição entre diferentes membros da
                    equipe.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <SubTopic>Traffic (Tráfego)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Exibe métricas relacionadas ao tráfego e visibilidade do
                repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Informações Disponíveis:">
              <List type="disc">
                <ListItem>
                  <Paragraph>Visualizações do repositório.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Clones realizados e quantos usuários únicos realizaram o
                    clone.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Origem do tráfego (links de referência).
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>
            <SubTopic>Commits</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Apresenta uma visão detalhada do histórico de commits no
                repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Funcionalidades">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Gráfico de frequência de commits ao longo do tempo.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>Insights sobre os picos de atividade.</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Correlação entre commits e eventos importantes, como merges
                    de Pull Requests.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Dependencies (Dependências)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Lista as bibliotecas e pacotes externos que o repositório
                utiliza.
              </Paragraph>
            </ListItem>
            <ListItem title="Recursos Avançados">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Alertas para dependências vulneráveis, identificados via
                    Dependabot.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Possibilidade de atualizar dependências diretamente pela
                    interface do GitHub.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Security (Segurança)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Foca em vulnerabilidades e boas práticas de segurança do
                repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Inclui">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Alertas de segurança detectados automaticamente.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Monitoramento contínuo das dependências.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Recomendações para corrigir falhas de segurança.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Network (Rede)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>Mostra a relação entre forks e branches.</Paragraph>
            </ListItem>
            <ListItem title="Recursos">
              <List type="disc">
                <ListItem>
                  <Paragraph>
                    Visualização gráfica dos forks derivados do repositório.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    Análise das branches e como elas interagem.
                  </Paragraph>
                </ListItem>
              </List>
            </ListItem>

            <SubTopic>Code Frequency (Frequência de Código)</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Gráfico que apresenta adições e exclusões de código no
                repositório ao longo do tempo.
              </Paragraph>
            </ListItem>
            <ListItem title="Utilidade">
              <Paragraph>
                Ajuda a rastrear tendências de desenvolvimento e mudanças
                significativas no projeto.
              </Paragraph>
            </ListItem>

            <SubTopic>Projects</SubTopic>
            <ListItem title="Descrição">
              <Paragraph>
                Permite ver o progresso de tarefas relacionadas aos projetos
                conectados ao repositório.
              </Paragraph>
            </ListItem>
            <ListItem title="Funcionalidade">
              <Paragraph>
                Integração com a seção Projects para análise de fluxos de
                trabalho.
              </Paragraph>
            </ListItem>
          </List>
        </TopicContent>
        <TopicContent>
          <TopicTitle>Como Usar Insights de Forma Eficiente</TopicTitle>
          <List type="disc">
            <ListItem>
              <Paragraph>
                Acompanhe o progresso do projeto por meio de gráficos e
                tendências.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Utilize os dados para identificar gargalos ou baixa
                produtividade.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Monitore dependências e vulnerabilidades para manter o projeto
                seguro e atualizado.
              </Paragraph>
            </ListItem>
          </List>
        </TopicContent>
      </Content>
    </>
  );
}
