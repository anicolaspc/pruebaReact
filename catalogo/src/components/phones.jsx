import React from "react";
import FetchComponent from './fetchConecction'

const PhoneList = () => {
    return (
        <FetchComponent url="https://phone-specs-api-2.azharimm.dev/latest">
            {(data) => {
                const phones = data?.data?.phones || []

                return (
                    <>
                        <h1>Lista de telefonos</h1>
                        <div className="">
                            {phones.length > 0 ? (
                                phones.map((phone, index) => (
                                    <div key={index}>
                                        <img src={phone.image} alt="" />
                                        <h2>{phone.phone_name}</h2>
                                    </div>
                                ))
                            ) : (
                                <p>No hay teléfonos disponibles</p>
                            )}
                        </div>
                    </>
                )
            }}
        </FetchComponent>
    )

}

export default PhoneList