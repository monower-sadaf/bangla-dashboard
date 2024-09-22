"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { uploadServiceData } from "@/app/(portal)/_api";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [serviceImg, setServiceImg] = useState(null);
  const [tutorialVideo, setTutorialVideo] = useState(null);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showItem, setShowItem] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitService = async (data) => {
    // const linksArray = data?.key?.map((linkValue) => ({
    //   link: linkValue,
    // }));
    // const valueArr = data?.url?.map((linkValue) => ({
    //   url: linkValue,
    // }));

    // const combinedArray = linksArray?.map((linkObj, index) => ({
    //   key: linkObj.link,
    //   value: valueArr?.[index]?.url,
    // }));

    // console.log({ combinedArray });

    setIsLoading(true);
    // const { name, des, link, status, image, tutorial, documentation, support } =
    //   data;
    
    const {
      component,
      description,
      distribution,
      logo,
      name,
      production_status,
      release_date,
      sub_title,
      type,
      visit_link,
      visit_type,
      resource_file
    } = data;

    let paid_status  = {
      free: data.free ? 1 : 0,
      pro: data.pro ? 1 : 0,
    };
    
   
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("component", component);
    formData.append("distribution", distribution);
    formData.append("logo", logo[0]);
    formData.append("paid_status", JSON.stringify(paid_status));
    formData.append("production_status", production_status);
    formData.append("release_date", release_date);
    formData.append("type", type);
    formData.append("sub_title", sub_title);
    formData.append("visit_link", visit_link || "");
    formData.append("visit_type", visit_type);
    formData.append("resource_file", resource_file[0] || "");

    // Append your data to the FormData object
    // formData.append("name", name);
    // formData.append("des", des);
    // formData.append("main_url", link);
    // formData.append("status", status);
    // formData.append("img", image[0]);
    // formData.append("others_link", JSON.stringify(combinedArray));
    // formData.append("tutorial", tutorial[0] || '');
    // formData.append("documentation", documentation);
    // formData.append("support", support);

    // console.log(Object.fromEntries(formData));
    //  return;

    // console.log("url links uploads");

    const uploadRes = await uploadServiceData(formData);

    console.log("uploadRes", uploadRes);

    if (uploadRes.status === true) {
      setIsLoading(false);
      toast.success("Service Created Successfully");
      router.push("/admin/services");
      reset();
    } else {
      setIsLoading(false);
      toast.error("Service Creation Failed");
    }
  };

  // console.log({ showItem });

  return (
    <>
      <section className="pb-10">
        <h3 className="text-32 font-mono font-bold text-[#151D48] pb-5">
          Create New Service
        </h3>
        <div className="flex justify-center w-full">
          <form
            className="bg-white p-4 w-full lg:w-[80%] overflow-hidden"
            onSubmit={handleSubmit(onSubmitService)}
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-20 font-mono font-bold text-[#151D48]">
                Service Details
              </h1>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Resoource Name
                    </label>
                  </legend>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      validate: {
                        wordCount: (value) => {
                          const wordCount = value.trim().split(/\s+/).length;
                          if (wordCount < 3) {
                            return "Description must have at least 3 words";
                          } else if (wordCount > 8) {
                            return "Description cannot exceed 8 words";
                          }
                          return true;
                        },
                      },
                    })}
                    type="text"
                    placeholder="Resoource Name"
                    className="outline-none p-2"
                  />
                </fieldset>
                {errors.name && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Resoource Sub Title
                    </label>
                  </legend>
                  <input
                    {...register("sub_title", {
                      required: "Sub Title is required",
                      validate: {
                        maxWords: (value) => {
                          const wordCount = value.trim().split(/\s+/).length;
                          return (
                            wordCount <= 10 ||
                            "Description cannot exceed 10 words"
                          );
                        },
                      },
                    })}
                    id="sub_tile"
                    type="text"
                    placeholder="Resoource Sub Title"
                    className="outline-none p-2"
                  />
                </fieldset>
                {errors.sub_title && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.sub_title.message}
                  </p>
                )}
              </div>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Description
                    </label>
                  </legend>

                  <textarea
                    {...register("description", {
                      required: "description is required",
                      validate: {
                        maxWords: (value) => {
                          const wordCount = value.trim().split(/\s+/).length;
                          return (
                            wordCount <= 80 ||
                            "Description cannot exceed 80 words"
                          );
                        },
                      },
                    })}
                    id=""
                    className="outline-none p-2"
                    placeholder="Description"
                  ></textarea>
                </fieldset>
                {errors.description && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Type
                    </label>
                  </legend>

                  <select
                    {...register("type", { required: "Type is required" })}
                    className="outline-none p-2 bg-white"
                  >
                    <option value="Application">Application</option>
                    <option value="Plugin">Plugin</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="Datasets">Data Sets</option>
                    <option value="Tools">Tools</option>
                    <option value="Papers">Papers</option>
                    <option value="Font">Font</option>
                  </select>
                </fieldset>
                {errors.type && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.type.message}
                  </p>
                )}
              </div>

              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Production Status
                    </label>
                  </legend>

                  <select
                    {...register("production_status", {
                      required: "Production Status is required",
                    })}
                    className="outline-none p-2 bg-white"
                  >
                    <option value="Live">Live</option>
                    <option value="Beta">Beta</option>
                    <option value="On Test">On Test</option>
                  </select>
                </fieldset>
                {errors.production_status && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.production_status.message}
                  </p>
                )}
              </div>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Distribution
                    </label>
                  </legend>

                  <select
                    {...register("distribution", {
                      required: "Distribution is required",
                    })}
                    className="outline-none p-2 bg-white"
                  >
                    <option value="web">Web</option>
                    <option value="windows">Windows</option>
                    <option value="linux">Linux</option>
                    <option value="mac">Mac</option>
                    <option value="ios">IOS</option>
                    <option value="android">Android</option>
                  </select>
                </fieldset>
                {errors.distribution && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.distribution.message}
                  </p>
                )}
              </div>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Release Date
                    </label>
                  </legend>

                  <input
                    type="date"
                    {...register("release_date", {
                      required: "Release Date is required",
                    })}
                    className="outline-none p-2 bg-white"
                  />
                </fieldset>
                {errors.release_date && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.release_date.message}
                  </p>
                )}
              </div>

              {serviceImg && (
                <Image
                  src={URL.createObjectURL(serviceImg)}
                  width={320}
                  height={192}
                  className="w-80 h-48 rounded-md"
                  alt="Preview"
                />
              )}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Logo
                    </label>
                  </legend>

                  <input
                    {...register("logo", { required: "Logo is required" })}
                    id="file"
                    type="file"
                    onChange={(e) => {
                      setServiceImg(e.target.files[0]);
                    }}
                    // accept="video/mp4, video/ogg, video/avi"
                    accept="image/*"
                  />
                </fieldset>
                {errors.logo && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.logo.message}
                  </p>
                )}
              </div>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Paid Status
                    </label>
                  </legend>
                  <div className="flex gap-2 p-2">
                    <div className="space-x-2">
                      <input
                        type="checkbox"
                        name="free"
                        {...register('free')}
                        id=""
                        className="w-4 h-4"
                        value={"Free"}
                      />
                      <label htmlFor="free">Free</label>
                    </div>
                    <div className="space-x-2">
                      <input
                        type="checkbox"
                        {...register('pro')}
                        id=""
                        className="w-4 h-4"
                        value={"Pro"}
                      />
                      <label htmlFor="pro">Pro</label>
                    </div>
                  </div>

                  {/* <select
                    {...register('paid_status', { required: "Paid Status is required" })}
                    className="outline-none p-2 bg-white"
                  >
                    <option value="Free">Free</option>
                    <option value="Pro">Pro</option>
                  </select> */}
                </fieldset>
                {errors.paid_status && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.paid_status.message}
                  </p>
                )}
              </div>
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      Components
                    </label>
                  </legend>

                  <input
                    type="text"
                    {...register("component", {
                      required: "Components is required",
                    })}
                    className="outline-none p-2 bg-white"
                    placeholder="Enter Components"
                  />
                </fieldset>
                {errors.component && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.component.message}
                  </p>
                )}
              </div>

              {/* <div className="border border-gray-300 rounded">
              <div className="bg-gray-300 flex items-center justify-between p-2">
                <h3 className="text-primary font-semibold">Add Links</h3>
                <button
                  type="button"
                  onClick={() => {
                    setLinks([...links, { name: "", link: "" }]);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
              </div>
              {links.map((item, index) => (
                <div key={index} className="p-2 bg-neutral-100">
                  <div>
                    <div className="flex gap-2">
                      <fieldset className="w-full flex flex-col border rounded-md px-2">
                        <legend>
                          <label
                            htmlFor="ServiceName"
                            className="after:content-['_*'] after:text-red-500"
                          >
                            Link
                          </label>
                        </legend>
                        <input
                          type="text"
                          id={`ServiceName${index}`}
                          {...register(`link.${index}`, {
                            required: "Link is required",
                            maxLength: {
                              value: 30,
                              message: "Link cannot exceed 30 characters",
                            },
                          })}
                          placeholder="Service Link"
                          className="outline-none p-2 "
                          // onChange={(e) => setLink(e.target.value)}
                        />
                      </fieldset>
                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => {
                            setLinks(() => {
                              return links.filter(
                                (item, index2) => index !== index2
                              );
                            });
                          }}
                          className="border border-primary bg-primary text-white mt-2 px-2 py-1 rounded"
                        >
                          <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {errors.link?.[index] && (
                      <p className="text-red-500 text-12 px-2 pt-1">
                        {errors.link[index]?.message}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div> */}
              <div>
                <fieldset className="flex flex-col border rounded-md px-2">
                  <legend>
                    <label
                      htmlFor="ServiceName"
                      className="after:content-['_*'] after:text-red-500"
                    >
                      user access
                    </label>
                  </legend>

                  <select
                    {...register("visit_type", {
                      required: "Button is required",
                    })}
                    onChange={(e) => setShowItem(e.target.value)}
                    id=""
                    className="outline-none p-2 bg-white"
                  >
                    <option value="Download">Download</option>
                    <option value="Visit">Visit</option>
                    <option value="Subscribe">Subscribe</option>
                  </select>
                </fieldset>
                {errors.visit_type && (
                  <p className="text-red-500 text-12 px-2 pt-1">
                    {errors.visit_type.message}
                  </p>
                )}
              </div>
              {showItem == "Visit" || showItem == "Subscribe" ? (
                <div>
                  <fieldset className="flex flex-col border rounded-md px-2">
                    <legend>
                      <label
                        htmlFor="ServiceName"
                        className="after:content-['_*'] after:text-red-500"
                      >
                        {showItem} Link
                      </label>
                    </legend>

                    <input
                      type="text"
                      {...register("visit_link", {
                        required: "Visit Link is required",
                      })}
                      className="w-full outline-none p-2"
                      placeholder="Enter Link"
                    />
                  </fieldset>
                  {errors.visit_link && (
                    <p className="text-red-500 text-12 px-2 pt-1">
                      {errors.visit_link.message}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <fieldset className="flex flex-col border rounded-md px-2">
                    <legend>
                      <label
                        htmlFor="ServiceName"
                        className="after:content-['_*'] after:text-red-500"
                      >
                        Resource Download
                      </label>
                    </legend>

                    <input
                      {...register("resource_file", { required: "resource_file is required" })}
                      id="file"
                      type="file"
                      onChange={(e) => {
                        setServiceImg(e.target.files[0]);
                      }}
                      // accept="video/mp4, video/ogg, video/avi"
                      accept="image/*"
                    />
                  </fieldset>
                  {errors.resource_file && (
                    <p className="text-red-500 text-12 px-2 pt-1">
                      {errors.resource_file.message}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between">
                <p className="text-14">
                  <span className="text-red-500">*</span> Required
                </p>
                {isLoading ? (
                  <button
                    type="button"
                    className="px-4 py-2 bg-violet-700 text-white active:scale-90 transition-all duration-400 rounded-md"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-violet-700 text-white active:scale-90 transition-all duration-400 rounded-md"
                  >
                    Create
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
