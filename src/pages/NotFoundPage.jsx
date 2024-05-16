import React from "react";

const NotFoundPage = () => {
  return (
    <section>
      <div className=" text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <div>
              <img
                src="https://plus.unsplash.com/premium_vector-1714618860091-a4324d7b355a?bg=FFFFFF&q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="404"
              />
            </div>
            <p className="text-sm md:text-base text-[#F6009B] p-2 mb-4">
              The stuff you were looking for {"doesn't"} exist
            </p>
            <a
              href="/"
              className="bg-transparent hover:bg-[#F6009B] text-[#F6009B] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#F6009B] hover:border-transparent"
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
