import { getVans, getVan, getHostVans} from "../api/apiUtility";
import { requireAuth } from "./authUtil";
import {defer} from 'react-router-dom'

// All vans,
function vansloader() {
    return defer({ vans: getVans() })
}
async function hostloader({request}){
    await requireAuth(request)
    return defer({ vans: getHostVans()})
}
// Single Van,
async function vansIdloader({ params }) {
    return getVan(params.id)
}
async function hostIdloader({ params, request }) {
    await requireAuth(request)
    return getVan(params.id)
}

export {vansloader, hostloader, vansIdloader, hostIdloader}