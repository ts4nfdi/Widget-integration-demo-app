

const WithoutWidgetExample = () => {

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
                        <input type="text" class="form-control" id="matTypeFreeText" />
                    </div>                    
                </div> 
                <br></br>
                <div class="row form-group">                    
                    <label className="col-sm-2" for="matValueFreeText">Value</label>
                    <div className="col-sm-7">
                        <input type="text" class="form-control" id="matValueFreeText" />
                    </div>                    
                </div>                                               
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-12">     
                <h4>Material</h4>           
                <div class="row form-group">                    
                    <label className="col-sm-2" for="matTypeFreeText">Type</label>
                    <div className="col-sm-7">                        
                        <select id="matTypeSelect" class="form-control">
                            <option selected>Choose ...</option>
                            <option value={1}>Audio/Visual Material</option>
                            <option value={2}>Red Material</option>
                            <option value={3}>Discolored Material</option>
                            <option value={4}>Calcified Material</option>
                            <option value={5}>Flaked Material</option>
                        </select>
                    </div>                    
                </div> 
                <br></br>
                <div class="row form-group">                    
                    <label className="col-sm-2" for="matValueSelect">Value</label>
                    <div className="col-sm-7">
                        <select id="matValueSelect" class="form-control">
                            <option selected>Choose ...</option>
                            <option value={1}>Headset Device</option>
                            <option value={2}>Fabric</option>
                            <option value={3}>Copper</option>
                            <option value={4}>Bone</option>
                            <option value={5}>Aluminium</option>
                        </select>
                    </div>                    
                </div>                                               
            </div>
        </div>
        </>
    );

}

export default WithoutWidgetExample;