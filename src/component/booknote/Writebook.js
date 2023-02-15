
import Header from "layout/Header";
import Footer from 'layout/Footer';
import TestEditorForm from './WriteEditor';
import { PieChartComponent } from "./PieChartComponent";
import "../../assets/css/component/note/Writebook.css";

function Writebook(){
    return(
        <div>
            <Header></Header>
            
            <div className="writebook">
                
            <div className="writemain">
                
            <TestEditorForm></TestEditorForm>
          
                </div>
                
            </div>
           <div>
           <PieChartComponent></PieChartComponent>
           </div>
            <Footer></Footer>
        </div>
    )
}
export default Writebook;