import { Link, useParams } from 'react-router-dom';
import './formSty.css'
import FormInput from '../../../components/forms/formInput';
import { toDirty, update, updateAll, validate } from '../../../utils/forms';
import { useEffect, useState } from 'react';
import { findById } from '../../../services/productServices';
import FormTextArea from '../../../components/forms/formText';
import type { CategoryDTO } from '../../../models/category';
import { findCategorys } from '../../../services/categoryServices';

import FormSelect from '../../../components/forms/formSelect';

export default function  ProductForm(){

    const params = useParams();

    const isEditing= params.productId !== 'create'

    const [categories, setCategories] = useState<CategoryDTO[]>([])

    const [formData, setFormData] = useState({
           
            name: {
                value: "",
                id: "name",
                name: "name",
                type: "text",
                placeholder: "nome",
                validation:(value:string)=>{
                    return /^.{3,30}$/.test(value);
                },
                message:"minimo 3 e maximo 30 caracters"
            },
            price: {
                value: 0,
                id: "price",
                name: "price",
                type: "number",
                placeholder: "preço",
                validation:(value:number)=>{
                    return value>0
                },
                message:"number error"
            },
            imgUrl: {
                value: "",
                id: "imgUrl",
                name: "imgUrl",
                type: "text",
                placeholder: "imagem",
            },

            description:{
                value: "",
                id: "description",
                name: "description",
                type: "text",
                placeholder: "descrição",
                 validation:(value:string)=>{
                    return /^.{10,1000}$/.test(value);
                },
                message:"minimo 10 e maximo 1000 caracters"
            },
            categories:{
                value:[],
                id:"categories",
                name:"categories",
                placeholder:"Categorias",
                validation: function(value: CategoryDTO[]){
                    return value.length>0
                },
                message:"escolha pelo menos uma categoria"
            }
        })

        useEffect(()=>{
            findCategorys().then(res=>{
                setCategories(res.data)
            });
        },[])

        useEffect(()=>{
            if(isEditing){
                findById(Number(params.productId))
                    .then(res=>{
                        const newFormData = updateAll(formData, res.data)
                        setFormData(newFormData)
                    })
            }
        },[])
        function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
            const value = e.target.value;
            const name = e.target.name
            setFormData(prev=>{
                const up = update(prev,name,value);
                const valid = validate(up, name);
                return valid
            })
        }

        function handleTurnDirty(name: string){
            console.log("detro--fora",formData[name])
            setFormData(prev=>(toDirty(prev, name)))
        }

    return(
        <main>
            <section id="product-form-section" className="vsc-container">
                <div className="vsc-product-form-container">
                <form className="vsc-card vsc-form">
                    <h2>Dados do produto</h2>
                    <div className="vsc-form-controls-container">
                        <div>
                            <FormInput
                                onChange={handleInputChange}
                                className="vsc-form-control"
                                onTurnDirty={handleTurnDirty} 
                                {...formData.name} 
                            />
                            <div className='vsc-form-error' >{formData.name.message}</div>
                        </div>
                        <div>
                            <FormInput
                                onChange={handleInputChange}
                                className="vsc-form-control" 
                                {...formData.price} 
                                onTurnDirty={handleTurnDirty}
                            />
                            <div className='vsc-form-error' >{formData.price.message}</div>
                        </div>
                        <div>
                            <FormInput
                                onChange={handleInputChange}
                                className="vsc-form-control" 
                                onTurnDirty={handleTurnDirty}
                                {...formData.imgUrl} 
                            />
                        </div>
                        <div>
                            <FormSelect
                                className="vsc-form-control vsc-select" 
                                
                                onChange={((obj:any)=>setFormData((prev)=>{
                                    const up = update(prev,"categories",obj)
                                    return validate(up, "categories");
                                }))}
                                onTurnDirty={handleTurnDirty}
                                
                                {...formData.categories}
                                
                                options={categories}
                                isMulti
                                getOptionLabel={(obj:any)=>obj.name}
                                getOptionValue={(obj:any)=>String(obj.id)}
                            />
                            <div className='vsc-form-error' >{formData.categories.message}</div>
                        </div>
                        <div>
                            <div>
                                <FormTextArea
                                    onChange={handleInputChange}
                                    className="vsc-form-control vsc-textarea"
                                    onTurnDirty={handleTurnDirty} 
                                    {...formData.description} 
                                />
                                <div className='vsc-form-error' >{formData.description.message}</div>
                            </div>
                        </div>
                    </div>

                    <div className="vsc-product-form-buttons">
                        <Link to="/admin/products">
                            <button type="reset" className="vsc-btn vsc-btn-white">Cancelar</button>    
                        </Link>
                        <button type="submit" className="vsc-btn vsc-btn-blue">Salvar</button>
                    </div>
                </form>
                </div>
            </section>
    </main>
    );
}