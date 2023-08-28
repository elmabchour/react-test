import React from "react";
import { Link, Routes, Route } from "react-router-dom"
import Calculatrice from "../calculater/Calculatrice";
import FetchTest from "../FetchAxios/FetchTest";
import Compteur from "../Hooks/Compteur"
import Form from "../Hooks/Form"
import 'bootstrap/dist/css/bootstrap.css'
import Affichage from "../reduux/Affichage";
import Appel from "../reduux/Appel";
import Appell from "../redux/Appell";
function Menu() {
    return (
        <div>





            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Menu</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-4 mb-lg-0 bg-primery ">
                            <li class="nav-item bg-white ">
                                <a class="nav-link active" aria-current="page" href="#"> <Link to='Hooks'>Compteur</Link></a>
                            </li>
                            <li class="nav-item bg-white">
                                <a class="nav-link" href="#"><Link to='Form'>Form</Link></a>
                            </li>
                            <li class="nav-item dropdown bg-white">
                                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Link to='Fetch'>Fetch</Link>
                                </a>

                            </li>
                            <li class="nav-item bg-white">
                                <a class="nav-link"><Link to='calcul'>Calcule</Link></a>
                            </li>
                            <li class="nav-item bg-white">
                                <a class="nav-link"><Link to='Appel'>Affichage</Link></a>
                            </li>
                            <li class="nav-item bg-white">
                                <a class="nav-link"><Link to='Appell'>Redux</Link></a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/Form" element={<Form />} />
                <Route path="Hooks" element={<Compteur />} />
                <Route path="calcul" element={<Calculatrice />} />
                <Route path="Fetch" element={<FetchTest />} />
                <Route path="Appel" element={<Appel/>} />
                <Route path="Appell" element={<Appell/>} />

            </Routes>
        </div>
    )
}
export default Menu
