const protocolHttp = isLocalHost(url) ? 'http://' : 'https://'

const internal = protocolHttp + url + ":NUMERO_DA_PORTA/api/NOME_DO_ENDPOINT"

const endPoints = {
    absences: nomeDoEndpoint + "/absences",
    subAgents: nomeDoEndpoint + "/subagents",
    
};

export default endPoints;