import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import deploy from './deploy';
import Escrow from './Escrow';
import bg from './images/bg.jpg'

const provider = new ethers.providers.Web3Provider(window.ethereum);

export async function approve(escrowContract, signer) {
  const approveTxn = await escrowContract.connect(signer).approve();
  await approveTxn.wait();
}

function App() {
  const [escrows, setEscrows] = useState([]);
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    async function getAccounts() {
      const accounts = await provider.send('eth_requestAccounts', []);

      setAccount(accounts[0]);
      setSigner(provider.getSigner());
    }

    getAccounts();
  }, [account]);

  async function newContract() {
    const beneficiary = document.getElementById('beneficiary').value;
    const arbiter = document.getElementById('arbiter').value;
    const value = ethers.utils.parseEther(document.getElementById('ether').value);
    const escrowContract = await deploy(signer, arbiter, beneficiary, value);


    const escrow = {
      address: escrowContract.address,
      arbiter,
      beneficiary,
      value: value.toString(),
      handleApprove: async () => {
        escrowContract.on('Approved', () => {
          document.getElementById(escrowContract.address).className =
            'complete';
          document.getElementById(escrowContract.address).innerText =
            "✓ Transaction approved!";
        });

        await approve(escrowContract, signer);
      },
    };

    setEscrows([...escrows, escrow]);
  }


  
  return (
      <>
    
	    <div style={{backgroundImage: `url(${bg})`}}>
       <h1>Escrow</h1>
		  </div>
    
      
      <div className="card">
          <h2> New Contract </h2>
          <label>
            <input type="text" id="arbiter" />
            <span>Arbiter Address</span>
          </label>
          <label>
            <input type="text" id="beneficiary" />
            <span>Beneficiary Address</span>
          </label>
          <label>
            <input type="text" id="ether" />
            <span>Deposit Amount (in Eth)</span>
          </label>

          <div className="button-fr">
            <button id="deploy"
            onClick={(e) => {
              e.preventDefault();

              newContract();
            }}
          >
            Deploy</button>
          </div>
        </div>

      {escrows.length === 0 ? (<div>  </div>) : (<div className="card">
        <h2> Existing Contracts </h2>
        <div id="container">
          {escrows.map((escrow) => {
            return <Escrow key={escrow.address} {...escrow} />;
          })}
        </div>
       </div>) 
      }
    </>
  );
}

export default App;
