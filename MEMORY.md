# Memória técnica — Radar Comercial

## 2026-11-27 — criação do projeto

### Objetivo
Identificar oportunidades comerciais cruzando preços, custos, estoque, tendências e margens, utilizando futuramente APIs oficiais do Mercado Livre e de fornecedores/distribuidores.

### Decisões
- Etapa 1: apresentação pública estática para apoiar a solicitação de aprovação da aplicação junto ao Mercado Livre. A página não representa aprovação obtida.
- Publicação planejada: GitHub Pages, branch principal, pasta `/docs`, sem build e sem custos de infraestrutura.
- HTML semântico, CSS e JavaScript nativos. Fontes do sistema e ícones SVG locais; nenhuma chamada externa necessária.
- Identidade: fundo grafite, verde esmeralda, tipografia de sistema e gráficos vetoriais. Marca própria com símbolo de radar.
- Protótipo com dados explicitamente fictícios, busca, filtro por categoria, ordenação e alternância entre cenários demonstrativos de 7 e 30 dias. Não há coleta nem persistência de dados.
- Margem ilustrativa = (preço de venda − custo do produto − despesas estimadas) / preço de venda. Lucro unitário = preço − custo − despesas. Despesas fictícias incluem taxas, frete e tributos agregados; não representam regras ou tarifas reais do Mercado Livre. Resultado não é lucro líquido contábil.
- Arquitetura futura: Angular em `frontend/` e C# / .NET em `backend/`. Pastas reservadas, sem scaffolding.
- Integração inicial prevista somente leitura; sem alteração de anúncios, preços, estoque ou pedidos.

### Escopo excluído da etapa 1
OAuth, credenciais, integração real com APIs, banco de dados, ingestão de dados de usuários e infraestrutura paga.

### Etapas
1. **Implementada localmente:** landing page e dashboard demonstrativo; documentação e preparação para GitHub Pages.
2. **Pendente:** criar/conectar repositório remoto, publicar `/docs` no GitHub Pages e usar a URL na solicitação de aprovação.
3. **Futura:** validar requisitos oficiais da integração e estruturar Angular / .NET.
4. **Futura:** implementar autenticação e integração somente leitura, após definição e autorização da nova etapa.
5. **Futura:** incorporar fontes de fornecedores, custos e estoque, com regras de comparação e margem.

### Cuidados futuros
Consultar documentação oficial vigente antes de implementar APIs. Definir segurança, privacidade, permissões mínimas e armazenamento antes de tratar dados reais. Não transformar estimativas do protótipo em promessa de resultado.

### Validação da etapa 1
- `node --check docs/assets/app.js`: sintaxe aprovada.
- Verificação funcional em Node com DOM simulado: cálculo de lucro/margem, pesquisa sem acentos, filtros combinados, resultado vazio, ordenação, alternância de cenário e menu aprovados.
- Arquivos locais, âncoras e IDs verificados; HTML sem dependências remotas. Página e três assets responderam HTTP 200 em servidor local.
- Revisão visual em navegador pendente: o host de acesso ao navegador estava indisponível na sessão. As media queries foram implementadas, mas a renderização em desktop/mobile ainda precisa ser conferida visualmente.
- Git local inicializado na branch `main`, sem commit ou remoto. Publicação externa não realizada.
