# Radar Comercial

Inteligência comercial para conectar preços, custos e oportunidades. Projeto pessoal independente, em desenvolvimento, sem vínculo oficial com o Mercado Livre.

## Primeira etapa

Landing page responsiva com identidade própria, apresentação do projeto e dashboard interativo de **dados fictícios**. Inclui indicadores, gráfico de cenários de 7/30 dias e ranking com busca, filtro e ordenação. Nenhuma informação vem de APIs reais.

Implementada com HTML, CSS e JavaScript nativos, sem instalação, build, fontes remotas ou bibliotecas obrigatórias. Funciona abrindo `docs/index.html` diretamente no navegador.

## Executar localmente

Abra `docs/index.html`. Para servir por HTTP, se Python estiver instalado:

```sh
python -m http.server 8080 --directory docs
```

Acesse `http://localhost:8080`. O servidor é opcional.

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos deste projeto para sua branch principal (`main`, por exemplo).
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch principal e a pasta **/docs**, e salve.
5. Aguarde o deployment. O GitHub exibirá a URL da página, normalmente `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.
6. Confira a página publicada antes de utilizar a URL na solicitação da aplicação ao Mercado Livre.

Não há domínio, conta remota ou publicação configurados automaticamente nesta entrega. Os caminhos são relativos, compatíveis com a URL de projeto do GitHub Pages. `docs/.nojekyll` mantém a entrega estática.

## Estrutura

```text
RadarComercial/
├── README.md
├── AGENTS.md
├── MEMORY.md
├── .gitignore
├── docs/
│   ├── index.html
│   ├── .nojekyll
│   └── assets/
│       ├── styles.css
│       ├── app.js
│       └── favicon.svg
├── backend/
│   └── README.md
└── frontend/
    └── README.md
```

## Limites e cálculo demonstrativo

O protótipo não implementa OAuth, integração real, banco de dados ou infraestrutura paga. Não armazena pesquisas, usa cookies ou envia dados. A integração futura inicialmente será somente leitura.

Lucro unitário estimado = preço − custo do produto − despesas estimadas. Margem estimada = lucro unitário / preço × 100. As despesas da simulação agregam taxas, frete e tributos fictícios; não são tarifas oficiais nem apuração de lucro líquido. Gráficos e tendências também são cenários fictícios, sem recomendação de investimento ou promessa de retorno.

## Evolução planejada

Frontend Angular e backend C# / .NET; integração oficial com o Mercado Livre e, futuramente, fornecedores e distribuidores. Consulte `MEMORY.md` para decisões e próximas etapas e `AGENTS.md` para orientações de manutenção.
