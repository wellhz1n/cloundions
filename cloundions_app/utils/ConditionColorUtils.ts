import Colors from "../assets/constants/Colors";
import { ConditionSlug } from "../classes/Weather";


class CorClass {
    corPrimaria: string;
    corSecundaria: string;
}

class ConditionColorUtils {


    public getColorByCondition(condicao: ConditionSlug): CorClass {

        var corGraus = Colors.primary;
        var corInformacoesSecundarias = Colors.white;


        if (condicao == "snow") {
            corInformacoesSecundarias = Colors.primary;
        }


        else if (
            condicao == "rain" ||
            condicao == "storm" ||
            condicao == "fog"
        ) {
            corGraus = Colors.secondary;
            if (condicao == "fog") {
                corInformacoesSecundarias = Colors.secondary;
            }
        }
        else if (
            condicao == "cloudly_day" ||
            condicao == "clear_day" ||
            condicao == "cloud"
        ) {
            corGraus = Colors.terciary;
            corInformacoesSecundarias = Colors.secondary;
            if (condicao == "clear_day") {
                corInformacoesSecundarias = Colors.terciary;
            }
        }

        else if (
            condicao == "cloudly_night" ||
            condicao == "none_day"
        ) {
            corGraus = Colors.quaternary
        }

        var c = new CorClass();
        c.corPrimaria = corGraus;
        c.corSecundaria = corInformacoesSecundarias;
        return c;
    }
}

export default new ConditionColorUtils();