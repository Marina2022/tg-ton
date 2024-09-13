import {useTonConnect} from "./useTonConnect.js";
import {useAsyncInitialize} from "./useAsyncInitialize.js";
import {TonClient} from "ton";
import {getHttpEndpoint} from "@orbs-network/ton-access";
import {CHAIN} from "@tonconnect/ui-react";

export const useTonClient = ()=>{
  const {network} = useTonConnect()
  
  const clientObj = {
    client: useAsyncInitialize(
      async()=>{
        if(!network) return
        return new TonClient({
          endpoint: await getHttpEndpoint({
            network: network === CHAIN.MAINNET ? 'mainnet' : 'testnet'
          })
        })
      },
      [network]      
    )
  } 
  
  return clientObj  
}