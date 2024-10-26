import {
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    docker,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "sobre",
      title: "Sobre",
    },
    /*{
      id: "trabalho",
      title: "Trabalhos",
    },*/
    {
      id: "experiencia",
      title: "Experiencias"

    },
    {
      id: "contato",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Analista de Suporte Jr.",
      company_name: "Qintess",
      //icon: resource,
      iconBg: "#383E56",
      date: "Junho 2021 - Fevereiro 2024",
      points: [
        "Responsável pelo atendimento, documentação e resolução de problemas e dúvidas técnicas relacionadas aos sistemas negociais do TRT2.",
        "Responsável por diagnosticar e garantir a continuidade operacional, aprimorando a experiência do usuário final através de suporte técnico especializado e consultoria proativa."
      ],
    }
  ];
  
  //Futuros depoimentos de clientes e ou chefes
  const testimonials = [ 
    /*{
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },*/
  ];
  
  const projects = [
    {
      name: "Queria que tivesse algum projeto...",
      description:
        "Nada pra ver aqui... ainda.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ]
      //image:,
      //source_code_link: "",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };