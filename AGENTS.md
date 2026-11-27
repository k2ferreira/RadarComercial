# Radar Comercial — instruções para agentes

## Contexto e objetivo
Ferramenta pessoal de inteligência comercial para cruzar preços, custos, estoque, tendências e margens. Ler `MEMORY.md` e `README.md` antes de alterar o projeto.

## Etapa atual
Landing page estática em `docs/`, publicada futuramente no GitHub Pages. Usar HTML, CSS e JavaScript nativos, sem dependências externas obrigatórias. Manter caminhos relativos, compatíveis com publicação em subdiretório.

## Regras
- Conteúdo em português do Brasil, responsivo e acessível por teclado.
- Identificar explicitamente todos os dados demonstrativos como fictícios.
- Manter visíveis o estado em desenvolvimento, o modo inicial somente leitura e a ausência de vínculo oficial com o Mercado Livre.
- Não implementar OAuth, APIs reais, banco de dados ou infraestrutura paga nesta etapa.
- Não incluir tokens, credenciais, dados pessoais ou informações comerciais reais no repositório.
- Não afirmar aprovação ou homologação pelo Mercado Livre.
- Não publicar ou configurar serviços externos sem instrução do usuário.
- Registrar decisões e mudanças de etapa em `MEMORY.md`.

## Arquitetura futura
`frontend/`: Angular. `backend/`: C# / .NET. Não inicializar esses frameworks durante a etapa de apresentação.

## Validação
Verificar sintaxe JavaScript, caminhos locais e comportamento de filtros, ordenação e menu. Revisar desktop e mobile quando houver navegador disponível. Documentar limitações da verificação.
