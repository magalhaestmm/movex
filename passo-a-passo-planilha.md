# Ligar o formulário ao Google Sheets

Leva uns 5 minutos. Você só precisa de uma conta Google. Os nomes dos menus aparecem aqui em português e, entre parênteses, em inglês, para quem usa o Google em inglês.

1. Crie uma planilha nova em sheets.google.com. Dê o nome que quiser (por exemplo, "Movex contatos").
2. No menu da planilha, clique em **Extensões > Apps Script** (**Extensions > Apps Script**).
3. Apague o código que já está lá e cole o conteúdo do arquivo `apps-script/Code.gs`. Clique em **Salvar** (**Save**, ícone de disquete).
4. No canto superior direito do editor, clique no botão azul **Implantar** (**Deploy**) e escolha **Nova implantação** (**New deployment**).
   - Ao lado de "Selecionar tipo" (**Select type**) há uma engrenagem. Clique nela e escolha **App da Web** (**Web app**).
   - **Executar como** (**Execute as**): Eu (**Me**), com o seu e-mail.
   - **Quem pode acessar** (**Who has access**): Qualquer pessoa (**Anyone**).
   - Clique em **Implantar** (**Deploy**).
5. O Google vai pedir autorização. Clique em **Autorizar acesso** (**Authorize access**), escolha a sua conta e, se aparecer o aviso de "app não verificado" (**Google hasn't verified this app**), clique em **Avançado** (**Advanced**) e depois em **Acessar [nome do projeto] (não seguro)** (**Go to [project name] (unsafe)**). É o seu próprio script.
6. Copie a **URL do app da Web** (**Web app URL**), que termina em `/exec`.
7. Abra `index.html`, procure `COLE_AQUI_A_URL_DO_APPS_SCRIPT` (perto do fim do arquivo) e troque pela URL copiada, mantendo as aspas.
8. Teste: abra a página, preencha o formulário e envie. Uma linha nova deve aparecer na aba **Contatos** da planilha (o script cria a aba e o cabeçalho sozinho na primeira vez).

## Se você não achar o botão "Implantar" (Deploy)

- O botão fica no canto superior direito do editor do Apps Script, ao lado de "Executar" (**Run**) no topo, não na planilha. Se você estiver na planilha, volte pelo menu **Extensions > Apps Script**.
- Se o botão estiver cinza, clique primeiro em **Salvar** (**Save**).
- Se o botão não aparecer, a janela pode estar estreita demais: aumente a janela do navegador ou use o zoom em 80%.

## Observações

- Se você mudar o código do Apps Script depois, use **Implantar > Gerenciar implantações** (**Deploy > Manage deployments**), clique no lápis (**Edit**), escolha **Nova versão** (**New version**) e depois **Implantar**. Sem isso, a URL continua rodando a versão antiga.
- A planilha é privada. A URL do script só permite **adicionar** linhas, não ler.
- O navegador não deixa a página ler a resposta do Apps Script, então a página mostra "recebemos" quando o envio sai sem erro de conexão. Confira a planilha no primeiro teste para ter certeza de que gravou.
- O texto de privacidade da página diz que o contato será usado para novidades do Movex e uma conversa rápida sobre a experiência de compra. Ajuste esse texto se o uso real for outro.
