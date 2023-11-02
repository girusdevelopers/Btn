import React from "react";
import css from "./landingpage.module.scss";
import RightarrowIcon from "@/ui/icons/Right-arrow.Icon";

const Landingpage = () => {
  return (
    <div className={css["container"]}>
      <div className={css["head"]}>
        <div>
          <p className={css["landing"]}>Landing Page Template</p>
        </div>
        <div className={css["side-head"]}>
          <div>
            <p className={css["dash"]}> Dashboard</p>
          </div>
          <div>
            <RightarrowIcon />
          </div>
          <div>
            <p className={css["dash1"]}> Landing Page Template</p>
          </div>
        </div>
      </div>
      <hr className={css["hr"]} />
      <div>
        <p className={css["side-head1"]}>Landing Page Template</p>
      </div>
      <div className={css["main-box"]}>
        <div className={css["box-head"]}>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>B</p>
          </div>

          <div>
            <p>B</p>
          </div>

          <div>
            <p>B</p>
          </div>
        </div>
        <hr />

        <div className={css["data1"]}>
          <div>
            <img
              className={css["image"]}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className={css["img-data"]}>
            <p className={css["img-data1"]}>Nossa missão</p>
            <p className={css["img-data1"]}>Como funciona</p>
            <p className={css["img-data1"]}>Aplicativo móvel</p>
          </div>
        </div>
        <div className={css["data2"]}>
          <div className={css["data21"]}>
            <div>
              <p className={css["da1"]}>
                A melhor maneira de chegar onde quer que você vá
              </p>
            </div>
            <div>
              <p>
                {" "}
                className={css["da2"]}Levaremos você com rapidez e conforto para
                qualquer lugar da sua cidade
              </p>
            </div>
            <div className={css["data2-img"]}>
              <div>
                <img
                  className={css["app"]}
                  src="https://cabme-landing.siswebapp.com/img/appstore.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className={css["app"]}
                  src="https://cabme-landing.siswebapp.com/img/google_play.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className={css["car"]}
              src="https://cabme-landing.siswebapp.com/img/banner-img.png"
              alt=""
            />
          </div>
        </div>
        <div className={css["data3"]}>
          <div>
            <img
              className={css["car1"]}
              src="https://cabme-landing.siswebapp.com/img/our-mission.png"
              alt=""
            />
          </div>
          <div className={css["car1-data"]}>
            <p className={css["para1"]}>Nossa</p>
            <p className={css["para1"]}>Declaração de Missão</p>
            <p>
              Os provedores de serviços de mobilidade urbana on-line se
              preocupam com o preço da viagem com base na distância da viagem e
              no tipo de carro, no trânsito e nos preços de espera. Existem
              vários aplicativos disponíveis na Android Play Store e na Apple
              App Store para sua necessidade
            </p>
            <p>Mas só aqui no Floripa Car você tem os melhores preços.</p>
            <p className={css["para2"]}>Garantia sem surtos</p>
            <p className={css["para2"]}>Reserve agora ou mais tarde</p>
            <p className={css["para2"]}>Pagamento sem dinheiro</p>
          </div>
        </div>
        <div>
          <p className={css["como"]}>Como funciona</p>

          <div className={css["line"]}>
            <div className={css["line1"]}>
              <div>
                <img
                  className={css["line-image"]}
                  src="https://cabme-landing.siswebapp.com/img/how-it-icon.png"
                  alt=""
                />
              </div>
              <div>
                <p>Chame em apenas 2 guias</p>
              </div>
              <div>
                <p className={css["line-img-data"]}>
                  Abra o aplicativo, coloque o destino e boa viagem.
                </p>
              </div>
            </div>
            <div className={css["line1"]}>
              <div>
                <img
                  className={css["line-image"]}
                  src="https://cabme-landing.siswebapp.com/img/get_driver.png"
                  alt=""
                />
              </div>
              <div>
                <p>Consiga um motorista</p>
              </div>
              <div>
                <p className={css["line-img-data1"]}>
                  Abra o aplicativo, veja o mapa e chame seu motorista.
                </p>
              </div>
            </div>
            <div className={css["line1"]}>
              <div>
                <img
                  className={css["line-image"]}
                  src="https://cabme-landing.siswebapp.com/img/track_driver.png"
                  alt=""
                />
              </div>
              <div>
                <p>Rastreamento em tempo real</p>
              </div>
              <div>
                <p className={css["line-img-data"]}>
                  Sua segurança em primeiro lugar.
                </p>
              </div>
            </div>
            <div className={css["line1"]}>
              <div>
                <img
                  className={css["line-image"]}
                  src="https://cabme-landing.siswebapp.com/img/arrive_safely.png"
                  alt=""
                />
              </div>
              <div>
                <p>Chegue com segurança</p>
              </div>
              <div>
                <p className={css["line-img-data"]}>
                  Após a chegada, seu motorista será avaliado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={css["data4"]}>
          <div className={css["data4-in"]}>
            <div>
              <p>Obtenha um aplicativo móvel</p>
            </div>
            <div>
              <p className={css["data4-matter"]}>
                {" "}
                Floripa Car oferece inúmeras opções de carros por meio deste
                aplicativo de serviço de mobilidade urbana. Nossos serviços de
                táxi têm vários carros acessíveis por meio deste melhor
                aplicativo de reserva de táxi.
              </p>
            </div>
            
            <div>
            <div className={css["data4-imgbox"]}>
              <div>
                <img
                  className={css["data4-imagebox1"]}
                  src="https://cabme-landing.siswebapp.com/img/clean_car.png"
                  alt=""
                />
              </div>
              <div>
                <p>Carro Limpo</p>
                <p className={css["data4-image-matter"]}>
                  Você pode obter carros limpos e da melhor qualidade a um preço
                  acessível.
                </p>
              </div>
            </div>
              <div className={css["data4-imgbox"]}>
                <div>
                  <img
                    className={css["data4-imagebox1"]}
                    src="https://cabme-landing.siswebapp.com/img/transp_billing.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Faturamento Transparente</p>
                  <p className={css["data4-image-matter"]}>
                  Este aplicativo oferece 100% de transparência no faturamento, seja online ou em dinheiro.


                  </p>
                </div>
              </div>

              <div className={css["data4-imgbox"]}>
                <div>
                  <img
                    className={css["data4-imagebox1"]}
                    src="https://cabme-landing.siswebapp.com/img/rerliable_service.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Serviço Confiável</p>
                  <p className={css["data4-image-matter"]}>
                  Os serviços de táxi são muito descomplicados e confiáveis.</p>
                </div>
              </div>

              <div className={css["data4-imgbox"]}>
                <div>
                  <img
                    className={css["data4-imagebox1"]}
                    src="https://cabme-landing.siswebapp.com/img/courteous_drivers.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Motoristas corteses</p>
                  <p className={css["data4-image-matter"]}>
                  Este driver de aplicativo é muito educado e inteligente no mapa da cidade.</p>
                </div>
              </div>
              <div className={css["data4-imgbox"]}>
                <div>
                  <img
                    className={css["app1"]}
                    src="https://cabme-landing.siswebapp.com/img/appstore.png"
                    alt=""
                  />
                </div>
                <div>
                
                  <img className={css["app1"]} src="https://cabme-landing.siswebapp.com/img/google_play.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className={css["data4-img"]}
              src="https://cabme-landing.siswebapp.com/img/get-mobile-rg.png"
              alt=""
            />
          </div>
        </div>
        <div className={css["data5"]}>
          <div>
            <img 
            className={css["data5-image"]}
             src="data:image/jpeg;base64,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" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landingpage;
