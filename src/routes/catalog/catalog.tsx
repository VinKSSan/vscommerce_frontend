import HeaderClient from "../../components/headerClient/header"

import './catalogSty.css'

import SearchBar from "../../components/catalog/searchBar/searchBar"
import CatalogCard from "../../components/catalog/catalogCard/catalogCard"
import LoadMoreBtn from "../../components/catalog/loadMoreBtn/loadMoreBtn"

export default function Catalog(){
    return(
        <>
            <HeaderClient/>
            <main>
                <section id="catalog-section" className="vsc-container">
                    <SearchBar/>
                    <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                    </div>
                    <LoadMoreBtn/>
                </section>
            </main>
        </>
    )
}