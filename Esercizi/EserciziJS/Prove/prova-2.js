const ENV_DEBUG = false;

const debug = (verbose) => {
    if (verbose == true) {
        return (message) => {
            throw new Error(message)
        }
    }
    return (message) => ({message});
}

const _debug =  debug(ENV_DEBUG);

_debug("Reference Error...");