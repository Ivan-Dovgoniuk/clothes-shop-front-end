import { FormEvent, useState } from 'react'
import { useAddProductMutation } from '../../api/productsApi'

export default function AddProductPage() {

    const [files,setFiles] = useState<any>()
    const [name,setName] = useState<string>('')
    const [price,setPrice] = useState<string>('')
    const [shortDescription,setShortDescription] = useState<string>('')
    const [fullDescription,setFullDescription] = useState<string>('')
    const [category,setCategory] = useState<string>('')
    const [size,setSize] = useState<string>('')
    const [color,setColor] = useState<string>('')
    const [sale,setSale] = useState<boolean>(false)
    const [newPrice,setNewPrice] = useState<string>('')

    const [addProduct] = useAddProductMutation()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        if(files){
            for(let i=0;i<files.length;i++){
                formData.append('img',files[i] );
            }
        }
        formData.append('short_description',shortDescription)
        formData.append('full_description',fullDescription)
        formData.append('category',category)
        formData.append('color',color)
        formData.append('size',size)
        formData.append('sale',JSON.stringify(sale))
        formData.append('new_price',newPrice)
        formData.append('gender','male')

    const onSendProduct =(e:FormEvent)=>{
        e.preventDefault()
        addProduct(formData)
    }
   

    const handleImageChange = async ({
        currentTarget: input,
      }: React.ChangeEvent<HTMLInputElement>) => {
        if (input.files === null) return;
        setFiles(input.files);
    }

  return (
    <section className='container'>
        <form 
            className='mt-5'
            onSubmit={(e:FormEvent)=>onSendProduct(e)}
            encType='multipart/form-data'
            id='form'
        >
            <div className="flex flex-col gap-3 my-5 border-2 border-[SlateBlue] p-3">
                <label htmlFor="image">Add Image</label>
                <input 
                    type="file" 
                    id='image' 
                    name='img' 
                    accept="image/png, image/jpeg" 
                    multiple 
                    onChange={handleImageChange}/>
            </div>
            <div className="flex flex-col gap-3 my-5">
                <label htmlFor="name">Add name of product:</label>
                <input  
                    type="text" 
                    id='name' 
                    name='name' 
                    className='border-2 max-w-[400px]'
                    value={name}
                    onInput={(e)=>{setName((e.target as HTMLInputElement).value)}}
                />
            </div>
            <div className="flex flex-col gap-3 my-5">
                <label htmlFor="price">Add price of product:</label>
                <div className="flex gap-2">
                    <input 
                        type="number" 
                        id='price' 
                        name='price' 
                        className='border-2 max-w-[400px]'
                        value={price}
                        onInput={(e)=>{setPrice((e.target as HTMLInputElement).value)}}
                    />
                    <span>ГРН</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 my-5">
                <label htmlFor="description">Add short description of product:</label>
                <textarea 
                    id='description'
                    name='description' 
                    className='border-2 max-w-[600px] min-h-[100px]'
                    value={shortDescription}
                    onInput={(e)=>{setShortDescription((e.target as HTMLInputElement).value)}}
                />
            </div>
            <div className="flex flex-col gap-3 my-5">
                <label htmlFor="description">Add full description of product:</label>
                <textarea 
                    id='description' 
                    name='description' 
                    className='border-2 max-w-[600px] min-h-[200px]'
                    value={fullDescription}
                    onInput={(e)=>{setFullDescription((e.target as HTMLInputElement).value)}}
                />
            </div>
            <div className='flex gap-20 items-start'>
                <fieldset>
                    <legend className='font-bold text-2xl my-2'>Категория</legend>
                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="Футболки" 
                            name="category" 
                            value="Футболки"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Футболки">Футболки</label>
                    </div>
                    <div className='flex gap-4'>
                        <input
                            type="radio" 
                            id="Джемперы" 
                            name="category" 
                            value="Джемперы"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Джемперы">Джемперы</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="Спортивные костюмы" 
                            name="category" 
                            value="Спортивные костюмы"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Спортивные костюмы">Спортивные костюмы</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="Рубашки" 
                            name="category" 
                            value="Рубашки"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Рубашки">Рубашки</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="Поло"
                            name="category" 
                            value="Поло"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Поло">Поло</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="Майки" 
                            name="category" 
                            value="Майки"
                            onInput={(e)=>{setCategory((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="Майки">Майки</label>
                    </div>

                </fieldset>

                <fieldset>
                    <legend className='font-bold text-2xl my-2'>Размер</legend>
                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="L" 
                            name="size" 
                            value="S"
                            onInput={(e)=>{setSize((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="L">L</label>
                    </div>
                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="M" 
                            name="size" 
                            value="M"
                            onInput={(e)=>{setSize((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="M">M</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="XL" 
                            name="size" 
                            value="XL"
                            onInput={(e)=>{setSize((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="XL">XL</label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="XS" 
                            name="size" 
                            value="XS"
                            onInput={(e)=>{setSize((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="XS">XS</label>
                    </div>
                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="XXL" 
                            name="size" 
                            value="XXL"
                            onInput={(e)=>{setSize((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="XXL">XL</label>
                    </div>
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <legend className='font-bold text-2xl my-3'>Цвет</legend>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="blue" 
                            name="color" 
                            value="blue"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="blue"><div className="w-5 h-5 rounded-[32px] bg-[#337AB6]"></div></label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="red" 
                            name="color" 
                            value="red"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="red"><div className="w-5 h-5 rounded-[32px] bg-[#FF0000]"></div></label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="green" 
                            name="color" 
                            value="green"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="green"><div className="w-5 h-5 rounded-[32px] bg-[#5CB85C]"></div></label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="orange" 
                            name="color" 
                            value="orange"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="orange"><div className="w-5 h-5 rounded-[32px] bg-[#F0AC4E]"></div></label>
                    </div>

                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="skyblue" 
                            name="color" 
                            value="skyblue"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="skyblue"><div className="w-5 h-5 rounded-[32px] bg-[#5BC0DE]"></div></label>
                    </div>
                    
                    <div className='flex gap-4'>
                        <input 
                            type="radio" 
                            id="black" 
                            name="color" 
                            value="black"
                            onInput={(e)=>{setColor((e.target as HTMLInputElement).value)}}
                        />
                        <label htmlFor="black"><div className="w-5 h-5 rounded-[32px] bg-[#121720]"></div></label>
                    </div>
                </fieldset>
            </div>
            <div className='flex flex-col my-10 gap-3'>
                <legend className='font-bold text-2xl my-2'>Розпродажа</legend>
                <div className=' flex gap-4'>
                    <input 
                        type="checkbox" 
                        id="sale" name="sale" 
                        onChange={()=>setSale(prevState=>!prevState)}
                    />
                    <label htmlFor="sale" className='text-[#EB5783]'>Sale</label>
                </div>
                <div className={`${sale ? 'flex': 'hidden' } gap-2`}>
                    <label htmlFor="sale">Новая цена:</label>
                    <input 
                        type="number" 
                        id="sale" 
                        name="sale" 
                        value={newPrice} 
                        className='border-2 max-w-[300px]' 
                        onInput={(e)=>{setNewPrice((e.target as HTMLInputElement).value)}}/>
                </div>
            </div>
            <div>
                    <button type="submit" 
                            className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'
                    >
                        Добавить товар
                    </button>
            </div>
        </form>
        
    </section>
  )
}
