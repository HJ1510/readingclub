
import Header from "layout/Header";
import Footer from 'layout/Footer';
import TestEditorForm from './WriteEditor';
import { PieChartComponent } from "./PieChartComponent";
import "../../assets/css/component/note/Writebook.css";
import Chart from "./Chart";
import Chartdata from './Chartdata';
import Layout from './../../layout/Layout';
import { Container } from "react-bootstrap";

function Writebook(){
    return(
     <div>
            <Layout>
          <Container style={{height:"1000px"}}>
         
         
            <TestEditorForm>
                
            </TestEditorForm>
          
   
                
         
           <div>
        
           </div>
           </Container>
          </Layout>
          </div>
    )
}
export default Writebook;