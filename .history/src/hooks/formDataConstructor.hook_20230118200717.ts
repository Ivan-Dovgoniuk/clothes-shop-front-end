type IData = {
    dataName:string;
    data:any;
}


const useFormDataConstructor = (fileList:any,dataField:IData[]) =>{

    const formData = new FormData()

    if(fileList){
        for(let i=0;i<fileList.length;i++){
            formData.append('img',fileList[i] );
        }
    }
    
    for(let item of dataField){
        formData.append(item.dataName,item.data );
    }

}