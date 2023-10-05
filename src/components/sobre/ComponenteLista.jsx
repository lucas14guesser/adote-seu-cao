import React from 'react'
import { ItensSobre, ListaSobre, Titulo } from '../../styles/styles'

const ComponenteLista = () => {
    return (
        <>
            <Titulo>Sobre o adote um cão</Titulo>
            <ListaSobre>
                <ItensSobre>
                    O Website adote um cão é apenas um projeto template para treinamento de programação em React e Node.js.
                </ItensSobre>
                <ItensSobre>
                    Todas as informações presentes neste site são fictícias.
                </ItensSobre>
                <ItensSobre>
                    Se estiver com alguma dúvida sobre como este protótipo foi desenvolvido. Pode entrar em contato via e-mail.
                </ItensSobre>
                <ItensSobre>
                    O e-mail para contato é: lucas14gprojetos@gmail.com
                </ItensSobre>
                <ItensSobre>
                    Todas as redes sociais presentes no website te levarão até a página principal da própria rede, por exemplo: Caso clique no Instagram, você será redirecionado para a página inicial do mesmo.
                </ItensSobre>
                <ItensSobre>
                    Se você preencher o formulário e clicar no botão de enviar, você vai receber um e-mail. Você não estará adotando nenhum cachorro, é apenas um teste onde o back-end do site feito em Node,js estará lhe enviando um e-mail.
                </ItensSobre>
                <ItensSobre>
                    Eu utilizei o UX do Website do Acãochego como base.
                </ItensSobre>
            </ListaSobre>
        </>
    )
}

export default ComponenteLista