import Link from "next/link";
import React from "react";

export default function TermOfUser() {
  return (
    <div className="w-[50vw] ml-auto mr-auto">
      <Link href="/">Home</Link>
      <h2>1. Termos</h2>
      <p>
        Ao acessar ao site{" "}
        <Link href="https://dms-bookshelf.vercel.app/">Book Shelf</Link>,
        concorda em cumprir estes{" "}
        <Link href="https://privacidade.me/" target="_BLANK">
          termos de uso
        </Link>
        , todas as leis e regulamentos aplicáveis e concorda que é responsável
        pelo cumprimento de todas as leis locais aplicáveis. Se você não
        concordar com algum desses termos, está proibido de usar ou acessar este
        site. Os materiais contidos neste site são protegidos pelas leis de
        direitos autorais e marcas comerciais aplicáveis.
      </p>
      <h2>2. Uso de Licença</h2>
      <p>
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site Book Shelf , apenas para
        visualização transitória pessoal e não comercial.{" "}
        <Link href="https://privacidade.me/" target="_BLANK">
          políticas de privacidade
        </Link>{" "}
        .....Esta é a concessão de uma licença, não uma transferência de título
        e, sob esta licença, você não pode:
      </p>
      <ol>
        <li>modificar ou copiar os materiais; </li>
        <li>
          usar os materiais para qualquer finalidade comercial ou para exibição
          pública (comercial ou não comercial);{" "}
        </li>
        <li>
          tentar descompilar ou fazer engenharia reversa de qualquer software
          contido no site Book Shelf;{" "}
        </li>
        <li>
          remover quaisquer direitos autorais ou outras notações de propriedade
          dos materiais; ou{" "}
        </li>
        <li>
          transferir os materiais para outra pessoa ou `espelhe` os materiais em
          qualquer outro servidor.
        </li>
      </ol>
      <p>
        Esta licença será automaticamente rescindida se você violar alguma
        dessas restrições e poderá ser rescindida por Book Shelf a qualquer
        momento. Ao encerrar a visualização desses materiais ou após o término
        desta licença, você deve apagar todos os materiais baixados em sua
        posse, seja em formato eletrónico ou impresso.
      </p>
      <h2>3. Isenção de responsabilidade</h2>
      <ol>
        <li>
          Os materiais no site da Book Shelf são fornecidos 'como estão'. Book
          Shelf não oferece garantias, expressas ou implícitas, e, por este
          meio, isenta e nega todas as outras garantias, incluindo, sem
          limitação, garantias implícitas ou condições de comercialização,
          adequação a um fim específico ou não violação de propriedade
          intelectual ou outra violação de direitos.{" "}
        </li>
        <li>
          Além disso, o Book Shelf não garante ou faz qualquer representação
          relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do
          uso dos materiais em seu site ou de outra forma relacionado a esses
          materiais ou em sites vinculados a este site.
        </li>
      </ol>
      <h2>4. Limitações</h2>
      <p>
        Em nenhum caso o Book Shelf ou seus fornecedores serão responsáveis por
        quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
        lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
        incapacidade de usar os materiais em Book Shelf, mesmo que Book Shelf ou
        um representante autorizado da Book Shelf tenha sido notificado
        oralmente ou por escrito da possibilidade de tais danos. Como algumas
        jurisdições não permitem limitações em garantias implícitas, ou
        limitações de responsabilidade por danos conseqüentes ou incidentais,
        essas limitações podem não se aplicar a você.
      </p>
      <h2>5. Precisão dos materiais</h2>
      <p>
        Os materiais exibidos no site da Book Shelf podem incluir erros
        técnicos, tipográficos ou fotográficos. Book Shelf não garante que
        qualquer material em seu site seja preciso, completo ou atual. Book
        Shelf pode fazer alterações nos materiais contidos em seu site a
        qualquer momento, sem aviso prévio. No entanto, Book Shelf não se
        compromete a atualizar os materiais.
      </p>
      <h2>6. Links</h2>
      <p>
        O Book Shelf não analisou todos os sites vinculados ao seu site e não é
        responsável pelo conteúdo de nenhum site vinculado. A inclusão de
        qualquer link não implica endosso por Book Shelf do site. O uso de
        qualquer site vinculado é por conta e risco do usuário.
      </p>
      <h3>Modificações</h3>
      <p>
        O Book Shelf pode revisar estes termos de serviço do site a qualquer
        momento, sem aviso prévio. Ao usar este site, você concorda em ficar
        vinculado à versão atual desses termos de serviço.
      </p>
      <h3>Lei aplicável</h3>
      <p>
        Estes termos e condições são regidos e interpretados de acordo com as
        leis do Book Shelf e você se submete irrevogavelmente à jurisdição
        exclusiva dos tribunais naquele estado ou localidade.
      </p>
    </div>
  );
}
