import {EuiProvider} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import {QueryClient, QueryClientProvider} from "react-query";
import { AutocompleteWidget } from '@nfdi4health/semlookp-widgets';



const WithWidget = () => {

    const queryClient = new QueryClient();
    const apiBaseUrl = "https://service.tib.eu/ts4tib/api/";
    const apiCallParams = "ontology=bfo,ncit,vibso&type=class&collection=NFDI4CHEM";


    return(
        <>
        <h3>Without Widget</h3>
        <br></br>        
        <div className="row">
            <div className="col-sm-12">     
                <h4>Material</h4>           
                <div class="row form-group">                    
                    <label className="col-sm-2" for="matTypeFreeText">Type</label>
                    <div className="col-sm-7">                        
                        <EuiProvider>
                            <QueryClientProvider client={queryClient}>
                                <AutocompleteWidget
                                    api={apiBaseUrl}
                                    hasShortSelectedLabel
                                    parameter={apiCallParams}
                                    placeholder="Search for a Type"
                                    selectionChangedEvent={function noRefCheck() {}}
                                    allowCustomTerms={false}
                                />
                            </QueryClientProvider>
                        </EuiProvider>
                    </div>                    
                </div> 
                <br></br>
                <div class="row form-group">                    
                    <label className="col-sm-2" for="matValueSelect">Value</label>
                    <div className="col-sm-7">
                        <EuiProvider>
                            <QueryClientProvider client={queryClient}>
                                <AutocompleteWidget
                                    api={apiBaseUrl}
                                    hasShortSelectedLabel
                                    parameter={apiCallParams}
                                    placeholder="Search for a Value"
                                    selectionChangedEvent={function noRefCheck() {}}
                                    allowCustomTerms={false}
                                />
                            </QueryClientProvider>
                        </EuiProvider>
                    </div>                    
                </div>                                               
            </div>
        </div>
        </>
    );

}

export default WithWidget