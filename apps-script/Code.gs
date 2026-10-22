/**
 * Recebe o formulário do Movex e grava uma linha na planilha.
 * Cole este código em Extensões > Apps Script, dentro da sua planilha.
 */
var ABA = "Contatos";
var COLUNAS = ["Data e hora", "Nome", "E-mail ou WhatsApp", "Cidade", "Comprou móvel no último ano?"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var p = (e && e.parameter) || {};
    var sheet = obterAba_();
    sheet.appendRow([
      new Date(),
      limpar_(p.nome),
      limpar_(p.contato),
      limpar_(p.cidade),
      p.comprou === "Sim" ? "Sim" : "Não"
    ]);
    return resposta_({ ok: true });
  } catch (err) {
    return resposta_({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Abrir a URL do script no navegador mostra que ele está no ar.
function doGet() {
  return resposta_({ ok: true, mensagem: "Movex: formulário no ar." });
}

function obterAba_() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = planilha.getSheetByName(ABA);
  if (!sheet) {
    sheet = planilha.insertSheet(ABA);
    sheet.appendRow(COLUNAS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUNAS.length).setFontWeight("bold");
  }
  return sheet;
}

// Evita que um texto começando com = + - @ vire fórmula na planilha.
function limpar_(valor) {
  var t = String(valor || "").trim().slice(0, 200);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function resposta_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
