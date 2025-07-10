import editIcon from "../../../assets/icons/edit.svg"
import deleteIcon from "../../../assets/icons/delete.svg"
import './productSty.css'
import { useEffect, useState } from "react";
import { deleteById, findPageRequest } from "../../../services/productServices";
import type { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/catalog/searchBar/searchBar";
import LoadMoreBtn from "../../../components/catalog/loadMoreBtn/loadMoreBtn";
import DialogInformation from "../../../components/dialog/dialogInfor";
import DialogConfirmation from "../../../components/dialog/dialogConfirm";


export default function  ProductListing(){

    const [dialogInform, setDialogInform] = useState({
        visible: false,
        message: "SUCCESS OPERATION!"
    })

    const [dialogConfirm, setDialogConfirm] = useState({
        id:0,
        visible: false,
        message: "yes to confirmation!"
    })

    const [isLastPage, setIsLastPage]= useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams]= useState({
        page:0,
        name:"",
        size:12,
        sort:"name"
    });

    useEffect(()=>{
            findPageRequest(
                queryParams.page,
                queryParams.name,
                queryParams.size,
                queryParams.sort
            ).then(res=>{
                const nextPage = res.data.content;
                setProducts(prev => {
                    const filtered = nextPage.filter((item: ProductDTO) =>
                        !prev.some(p => p.id === item.id)
                    );
                    return [...prev, ...filtered];
                });

                setIsLastPage(res.data.last)
            })
        },[queryParams])

         function handleSearch(searchText:string){
            setProducts([])
            setQueryParams({...queryParams, page:0, name:searchText})
        }  

        function handleLoad(){
            setQueryParams({...queryParams,page: queryParams.page+1})
        }
//
        function handleCloseInform(){
            setDialogInform(prev=>({...prev, visible:false}))
        }

        function handleDelete(id:number){
            setDialogConfirm(prev=>({...prev, id:id, visible:true}))
        }

        function handleConfirmation(answer: boolean, pId: number){
            if(answer) {
                deleteById(pId)
                    .then(()=>{
                        setProducts([])
                        setQueryParams({...queryParams, page:0})
                        setDialogInform({
                            visible:true,
                            message:`p${pId} excluido, deleção concluida`
                        })
                    })
                    .catch(err=>{
                        setDialogInform({
                            visible:true,
                            message:err.response.data.error
                        })
                    })
            }
            setDialogConfirm(prev=>({...prev, visible:false}))
            console.log(answer, pId)
        }

    return(
        <main>
            <section id="product-listing-section" className="vsc-container">
                <h2 className="vsc-section-title vsc-mb20">Cadastro de produtos</h2>

                <div className="vsc-btn-page-container vsc-mb20">
                    <div className="vsc-btn vsc-btn-white">Novo</div>
                </div>

               <SearchBar onSearch={handleSearch}/>

                <table className="vsc-table vsc-mb20 vsc-mt20">
                    <thead>
                        <tr>
                        <th className="vsc-tb576">ID</th>
                        <th></th>
                        <th className="vsc-tb768">Preço</th>
                        <th className="vsc-txt-left">Nome</th>
                        <th></th>
                        <th></th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(p=>(
                                <tr key={p.id}>
                                    <td className="vsc-tb576">{p.id}</td>
                                    <td><img className="vsc-product-listing-image" src={p.imgUrl} alt="Computer"/></td>
                                    <td className="vsc-tb768">R$ {p.price}</td>
                                    <td className="vsc-txt-left">{p.name}</td>
                                    <td><img className="vsc-product-listing-btn" src={editIcon} alt="Editar"/></td>
                                    <td ><img className="vsc-product-listing-btn" onClick={()=>handleDelete(p.id)} src={deleteIcon} alt="Deletar"/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                 {
                    !isLastPage && (
                        <div className='btn' onClick={handleLoad}>
                            <LoadMoreBtn/>
                        </div>
                    )

                }
            </section>
            {
                dialogInform.visible && 
                <DialogInformation
                    message={dialogInform.message} 
                    onDialogClose={handleCloseInform}
                />
            }
            {
                dialogConfirm.visible && 
                <DialogConfirmation
                    id={dialogConfirm.id}
                    message={dialogConfirm.message} 
                    onDialogAnswer={handleConfirmation}
                />
            }
        </main>
    );
}