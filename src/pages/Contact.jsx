import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
    <div>
      <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur quidem magnam voluptatum officiis quo fuga dignissimos eaque tempore voluptatem quam a aperiam dolore vero impedit alias aspernatur numquam autem, quos quibusdam, temporibus, doloribus repellendus doloremque in. Quaerat cum deleniti similique, unde explicabo dolorem harum? Id incidunt tenetur corrupti ducimus architecto numquam eum fuga. Eius esse quod doloremque harum dolorem, explicabo eaque corporis quam laboriosam facere tempora, accusamus nobis impedit?</p>
    <div className="flex gap-5 justify-center">
      <hr />
    </div>
    </div>
      <Outlet/>
    </>
  )
}

export default Contact