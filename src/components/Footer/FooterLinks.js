import React from "react";

function FooterLinks() {
  return (
    <div className="max-w-screen-3xl bg-[#e7eff8]">
      <div className="mx-auto max-w-screen-xl xxl:max-w-screen-2xl">
        <div className="mx-auto  max-w-screen-lg xl:max-w-screen-2xl">
          <div className="mx-auto max-w-screen-md  lg:max-w-screen-2xl">
            <div className="mx-2  grid grid-flow-row-dense border-b-2  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4">
              <div className="">
                <h2 className="footer-title">Servicii pentru clienti</h2>
                <p className="footer-links">Deschiderea coletului la livrare</p>
                <p className="footer-links">30 de zile drept de retur</p>
                <p className="footer-links">
                  Plata cu cardul in rate fara dobanda
                </p>
                <p className="footer-links">Finantare in rate prin eCREDIT</p>
                <p className="footer-links">Garantii si service</p>
                <p className="footer-links">Black Friday eMAG</p>
              </div>

              <div className="">
                <h2 className="footer-title">Comenzi de livrare</h2>
                <p className="footer-links">Contul meu la eMAG</p>
                <p className="footer-links">Livrarea comenzilor</p>
                <p className="footer-links">eMAG Corporate</p>
                <p className="footer-links">eMAG Marketplace</p>
                <p className="footer-links">Modalitati de finantare si plata</p>
                <p className="footer-links">Vreau sa vand pe eMAG</p>
              </div>

              <div className="">
                <h2 className="footer-title">Suport Clienti</h2>
                <p className="footer-links">Formular returnare produs</p>
                <p className="footer-links">Contact</p>
                <p className="footer-links">Anunturi rechemare produse</p>
                <p className="footer-links">
                  Conditii generale privind <br /> furnizarea serviciilor
                  postale
                </p>
                <p className="footer-links">ANPC - SAL</p>
                <p className="footer-links">ANPC</p>
              </div>

              <div className="">
                <h2 className="footer-title">eMAG.ro</h2>
                <p className="footer-links">Despre eMAG</p>
                <p className="footer-links">Termene si conditii</p>
                <p className="footer-links">
                  Prelucrarea datelor cu caracter personal
                </p>
                <p className="footer-links">Politica de utilizare Cookie-uri</p>
                <p className="footer-links">Solutionarea Online a litigiilor</p>
                <p className="footer-links">
                  Programele Fundatiei Noua ne pasa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
