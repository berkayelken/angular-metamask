import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import detectEthereumProvider from '@metamask/detect-provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-metamask';
  minniesNft = 0

  public signInWithMetaMask() {
    detectEthereumProvider().then(provider => {
        if (!provider) {
          throw new Error('Please install MetaMask');
        }
        let ethereum: any = provider;
        let nftAddr = "0xc0567ECFf3b11F5Ec995Ff7c9Df23087B6096238"
        let nft: Promise<any> = ethereum.request({ method: "eth_getBalance", params: [nftAddr]})
        nft.then(res =>  this.minniesNft = Number(res))
    })
  }
}
