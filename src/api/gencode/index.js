import axios from '../../libs/api.request'

export const genKey = ({machineCode})=>{
    return Get(`GenKey?machineCode=${{ machineCode }}`);
}
export default genKey;