import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrimaryButton from './Buttons/PrimaryButton';
import Logo from "@/app/assets/Hardy.png";
import SecondButton from './Buttons/SecondButton';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ThirdButton from './Buttons/ThirdButton';
import BarrsButton from './Buttons/BarrsButton';




export default function Menu() {
    

  return (
    <div className="w-full h-20 bg-white shadow-lg">                        
      <div className="px-10 w-full m-auto flex justify-between items-center">
        <img className="w-40" src={Logo.src} alt="" />
        <div className="hidden lg:flex items-center gap-4">


          <ThirdButton
            text="Sobre"
          />
          <ThirdButton
            text="Carrinho"
        
          />
          <SecondButton
            text="Smartphones"
            icon={<SmartphoneOutlinedIcon />}
           
          />
          <PrimaryButton
            icon={<AccountCircleIcon />}
            text="Já sou Cliente"
            type="button"
          
          />
        </div>
        <div className="flex lg:hidden">
              <BarrsButton />
          
        </div>
      </div>
    </div>
  );
}
