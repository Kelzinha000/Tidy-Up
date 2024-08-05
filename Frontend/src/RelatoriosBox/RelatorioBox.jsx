import { DateRelatorio, TimeRelatorio, NomeAmbiente, BoxRelatorio } from "../styled/BoxRelatorios";

const RelatoriosCard = ({ambiente, date, time})=>{
    return(
<BoxRelatorio>
    <NomeAmbiente>{ambiente}</NomeAmbiente>
    <DateRelatorio>{date}</DateRelatorio>
    <TimeRelatorio>{time}</TimeRelatorio>
</BoxRelatorio>
    )
}

export default RelatoriosCard;