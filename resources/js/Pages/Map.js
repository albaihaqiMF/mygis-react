import Authenticated from "@/Layouts/Authenticated";
import 'leaflet/dist/leaflet.css'
import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Map
                </h2>
            }
        >
            <div className="pt-4">
                <MapContainer style={{height:'540px', width:'100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </Authenticated>
    );
}
