import axios from "axios";
import { LocalStorageService } from "./LocalStorageService";

export const FetchService = {

     fetchCourses: (): Promise<boolean | void> => {
           return axios.get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
             .then((res) => {
               if (!!res) {
                  LocalStorageService.setCourses(res.data);
                  return true;
               }
               return false;
             })
             .catch((c) => console.log("ERROR-01", c));
     },

     fetchTags: () => {
       axios.get('https://api.acharyaprashant.org/v2/legacy/courses/tags')
                  .then((res) => {
                     LocalStorageService.setTags(res.data[0]);
                  })
                  .catch((c) => console.log("ERROR-03", c));
     },

     fetchFAQs: () => {
       axios.get('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')
                  .then((res) => {
                     LocalStorageService.setFAQs(res.data);
                  })
                  .catch((c) => console.log("ERROR-05", c));
     },
}
