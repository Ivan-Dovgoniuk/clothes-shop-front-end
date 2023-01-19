
const useFormDataConstructor = (fileList:any,dataField:Array<[dataName:string,data:any]>) =>{

    const formData = new FormData()

    if(fileList){
        for(let i=0;i<fileList.length;i++){
            formData.append('img',fileList[i] );
        }
    }
    for(let i=0;i<dataField.length;i++){
        formData.append('img',dataField[i].data );
    }

        formData.append('name', name)
        formData.append('price', price)
        formData.append('short_description',shortDescription)
        formData.append('full_description',fullDescription)
        formData.append('category',category)
        formData.append('color',color)
        formData.append('size',size)
        formData.append('sale',JSON.stringify(sale))
        formData.append('new_price',newPrice)
        formData.append('gender','male')

}