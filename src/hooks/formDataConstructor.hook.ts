
type IDataField = {
    dataName:string;
    data:any;
}

export const useFormDataConstructor = (fileList:any,fileListName:string,dataField:IDataField[]) =>{

    const formData = new FormData()

    if(fileList){
        for(let i=0;i<fileList.length;i++){
            formData.append(fileListName,fileList[i] );
        }
    }

    for(let item of dataField){
        formData.append(item.dataName,item.data );
    }

    return formData;

}