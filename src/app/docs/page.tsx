import DocumentCard from "@/components/DocumentCard";
import Paragraph from "@/components/layout-elements/Paragraph";
import github from "@/assets/github.webp";
import git from "@/assets/git.png";
import docker from "@/assets/docker.png";
import k8s from "@/assets/k8s.png";
import kafka from "@/assets/kafka.png";

export default function GithubDocs() {
  const documents = [
    {
      tecnology: "github",
      description:
        "Descubra as melhores práticas para colaborar em projetos de código aberto e privados utilizando o GitHub, a plataforma líder em desenvolvimento colaborativo.",
      image: github,
      comingSoon: false,
      urlLink: "docs/github",
    },
    {
      tecnology: "git",
      description:
        "Aprenda os fundamentos do Git, a ferramenta de controle de versão essencial para gerenciar alterações de código e colaborar com eficiência.",
      image: git,
      comingSoon: true,
      urlLink: "docs/git",
    },
    {
      tecnology: "docker",
      description:
        "Explore como containerizar suas aplicações com Docker, simplificando a implementação e garantindo portabilidade em múltiplos ambientes.",
      image: docker,
      comingSoon: true,
      urlLink: "docs/docker",
    },
    {
      tecnology: "kubernetes",
      description:
        "Entenda como gerenciar contêineres em escala com o Kubernetes, a plataforma líder em orquestração de containers.",
      image: k8s,
      comingSoon: true,
      urlLink: "docs/kubernetes",
    },
    {
      tecnology: "kafka",
      description:
        "Mergulhe no Apache Kafka, uma poderosa plataforma de streaming distribuído para construir pipelines de dados robustos e escaláveis.",
      image: kafka,
      comingSoon: true,
      urlLink: "docs/kafka",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 mx-16 my-16">
      <h1 className="text-3xl md:text-4xl font-bold text-start text-[#F5F5F5]">
        Nossas Documentações
      </h1>
      <Paragraph indent={false}>
        Em qual documentação você mais tem interesse?
      </Paragraph>
      <div className="flex flex-wrap justify-center gap-20 w-full">
        {documents.map((document) => (
          <DocumentCard
            key={document.tecnology}
            tecnology={document.tecnology}
            description={document.description}
            image={document.image}
            comingSoon={document.comingSoon}
            urlLink={document.urlLink}
          />
        ))}
      </div>
    </div>
  );
}
