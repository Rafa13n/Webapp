import './App.css';
import React from 'react';
import perfil from './Imagen/Perfil.jpg';
 

export default class App extends React.Component {
    render(){
        return(
            <section className="s-container">
                <article className="a-left">
                    <header>
                       
                        <ul>
                            <li><i className="fas fa-history"></i></li>
                            <li><i className="fas fa-comment-dots"></i></li>
                            <li><i className="fas fa-ellipsis-v"></i></li>
                        </ul>
                    </header>

                    <article className="a-notify">
                        <i className="fas fa-bell-slash"></i>
                        <p>Receba notificações de novas mensagens <span>Ativar notificações na área de trabalho</span></p>
                    </article>    

                    <article className="a-search">
                        <button><i class="fas fa-search">+</i></button>
                        <input type="text" placeholder="Procurar ou começar uma nova conversa"/>
                    </article>

                    <article className="a-panel-conversation">
                   <div className="box-conversation">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Cade a atividade ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Entregar dia 16 ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> Vale 1 ponto ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> pontos extra se eu gostar...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> manda no github...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> vou avaliar lá ...</p>
                        </div>
                        </div>

                        <div className="box-conversation white">
                        <img src={perfil}/>
                        <div className="text">
                            <div class="info-contact"><h3>Isis</h3><p>11:36</p></div>
                            <p><i class="fas fa-check-double"></i> tchau não esquece ...</p>
                        </div>
                        </div>

                        
                        
                    </article>
                </article>
            </section>
        );
    }
}
