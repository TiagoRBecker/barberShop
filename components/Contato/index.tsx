import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState,useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { services, colaborador,hours } from "../../utils/utils";
import {Hour,Services,Colaborador} from "../../utils/types"
const Contato = () => {
   
  const validateForm = yup.object().shape({
    date: yup.string().required("Necessario preencher a data"),
    telefone: yup.string().required("O campo Telefone é obrigatório").min(11),
    email: yup
      .string()
      .required("Necessário preencher o campo com um e-mail válido")
      .email(),
    nome: yup.string().required("O campo Nome é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  });
  const [nameInput, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState<Date>();
  const [ hour , setHour] = useState("")
  const [errorService, setErrorService] = useState(false);
  const [errorBarber, setErrorBarber] = useState(false);
  const [errorHour,setErrorHour] = useState(false)
  useEffect(()=>{
    setErrorService(false)
    setErrorBarber(false)
    setErrorHour(false)
},[barber,service,hour])
  const dateAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const dataAtual = ano + "-" + mes + "-" + dia;
    return dataAtual;
  };

  const handleDadosForm = (data: any) => {
    
    if(service === "" || barber === "" || hour === ""  ){
      setErrorService(true)
      setErrorBarber(true)
      setErrorHour(true)
      return
     
    }
    else{
        setErrorService(false)
        setErrorBarber(false)
        setErrorHour(false)
        
    }
  
 
    
   
     
   

    const schedule = new Date(date as any);
    const dia = String(schedule.getDate()).padStart(2, "0");
    const mes = String(schedule.getMonth() + 1).padStart(2, "0");
    const ano = schedule.getFullYear();
    const dataAtual = dia + "-" + mes + "-" + ano;

   const url =
        "https://api.whatsapp.com/send?phone=5551997338612&text=" + // Seu numero
        "*Formulário de Contato*" +
        "%0a" + // Mensagem personalizada
        "%0a" + // Quebra de linha
        "*Nome*: " +
        data.nome +
        "%0a" + // Dados do formulário
        "*Telefone*: " +
        data.telefone +
        "%0a" +
        "*E-mail*: " +
        data.email +
        "%0a" +
        "*Serviço*: " +
        data.service +
        "%0a" +
        "*Barbeiro*: " +
        data.barber +
        "%0a" +
        
        "*Hora Agendada*: " +
        data.hour +
        "%0a" +
        "*Data Agendada*: " +
          dataAtual +
        "%0a";
       
  
      window.open(url as string, "_blank")?.focus();
      Router.reload()
   
  };
  return (
    <form
      className="boxContatoFormulario"
      onSubmit={handleSubmit(handleDadosForm)}
    >
      <div className="boxContatoInput">
        <input
          type={"text"}
          {...register("nome", { required: true })}
          placeholder="Nome"
          value={nameInput}
          name={"nome"}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error">{errors.nome?.message as any}</span>
      </div>
      <div className="boxContatoInput">
        <input
          type={"email"}
          {...register("email", { required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          name={"email"}
        />
        <span className="error">{errors.email?.message as any}</span>
      </div>
      <div className="boxContatoInput">
        <input
          type={"text"}
          value={phone}
          {...register("telefone", { required: true })}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          name={"telefone"}
        />
        <span className="error">{errors.telefone?.message as any}</span>
      </div>
      <div className="boxContatoDate">
        <div className="boxContatoAgenda">
          <h2>Escolha a Data</h2>
          <input
            className="date"
            type="date"
            defaultValue={""}
            value={date as any}
            min={dateAtual()}
            {...register("date", { required: true })}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value as any)}
            name={"date"}
          />
          <span className="error">{errors.date?.message as any}</span>
        </div>
      </div>
      
      <div className="boxContatoServices">
      <div className="boxContatoHours">
        <h2>Escolha o Horário</h2>
        <select 
        value={hour} 
        {...register("hour", { required: true })}
        onChange={(e)=>setHour(e.target.value)}
        name={"hour"}
        >
            
         <option value={""}>Escolha o Horário</option>
         {
           hours.map((hour:Hour, indice:number)=>(
               <option key={indice} value={hour.hour}>{hour.hour}</option>
           ))
         }
        </select>
        <span className="error">{errorHour?"Necessário escolher um horário":""}</span>
      </div>
        <div className="boxContatoCortes">
            <h2>Selecione o Serviço</h2>
          <select
            value={service}
            {...register("service", { required: true })}
            placeholder="Service"
            onChange={(e) => setService(e.target.value)}
            name={"service"}
          >
            <option value={""}>Selecione o Serviço</option>
            {services.map((service:Services, indice: number) => (
              <option key={indice} value={service.path}>
                {service.path}
              </option>
            ))}
          </select>
          <span className="error">
            {errorService ? "Necessário escolher o serviço" : ""}
          </span>
        </div>

        <div className="boxContatoColaborador">
        <h2> Selecione o colaborador</h2>
          <select
            value={barber}
            {...register("barber", { required: true })}
            onChange={(e) => setBarber(e.target.value)}
          >
            <option value={""}>
              Selecione o colaborador
            </option>
            {colaborador.map((barber:Colaborador, indice: number) => (
              <option key={indice} value={barber.name}>
                {barber.name}
              </option>
            ))}
          </select>
          <span className="error">
            {errorBarber ? "Necessário escolher o colaborador" : ""}
          </span>
        </div>
      </div>
      <div className="boxContatoBtn">
        <input type={"submit"} value="ENVIAR" className="btnClass" />
      </div>
    </form>
  );
};
export default Contato;
