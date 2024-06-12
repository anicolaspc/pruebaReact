import React from "react";
import '../styles/brands.css';
import FetchComponent from "./fetchConecction";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const BrandList = () => {
    return (
        <FetchComponent url={'https://phone-specs-api-2.azharimm.dev/brands'}>
            {(data) => {
                const brands = data?.data || []

                return (
                    <>
                            <div className="order">
                                <label>
                                    <p>Ordenar por </p>
                                    <select>
                                        <option value="imperial">Mejores reviews</option>
                                        <option value="metrico">Precio más bajo</option>
                                    </select>
                                </label>
                            </div>
                        <div className="container">
                            <div className="brands">
                                <h1 className="brand-title">Marcas</h1>
                                <div className="brand">
                                    {brands.length > 0 ? (
                                        brands.map((brand, index) => (
                                            <div key={index}>
                                                <h2 className="name">{brand.brand_name}</h2>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No hay marcas disponibles</p>
                                    )}
                                </div>
                            </div>
                            <div className="price">
                                <h1 className="brand-title">Precio</h1>
                                <div className="price-range">
                                    <input type="text" placeholder="100" disabled />
                                    <label>-</label>
                                    <input type="text" placeholder="5.000" disabled />
                                </div>
                            </div>
                            <div className="review">
                                <h1 className="brand-title">Reviews</h1>
                                <StarIcon sx={{ color: '#FFD300' }}></StarIcon>
                                <StarBorderIcon sx={{ color: '#FFD300' }}></StarBorderIcon>
                            </div>
                            <div className="memory">
                                <h1 className="brand-title">Memoria</h1>
                            </div>
                            <div className="range">
                                <h1 className="brand-title">Rango</h1>
                            </div>
                            <div className="camera">
                                <h1 className="brand-title">Cámara</h1>
                            </div>
                        </div>
                    </>
                )
            }}
        </FetchComponent>
    )
}

export default BrandList