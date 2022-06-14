import { Utils } from "../utils/utils";

export class LocalStorageService {
    static setCourses(data: any) {
        if (data) {
            localStorage.setItem('courses', JSON.stringify(data));
        }
    }

    static setTags(data: any) {
        if (data) {
            localStorage.setItem('tags', JSON.stringify(data));
        }
    }

    static setFAQs(data: any) {
        if (data) {
            localStorage.setItem('faqs', JSON.stringify(data));
        }
    }

    static getFAQs() {
        return JSON.parse(localStorage.getItem('faqs') as string);
    }

    static getTags() {
        return JSON.parse(localStorage.getItem('tags') as string);
    }

    static getDetails() {
        const details = JSON.parse(localStorage.getItem('courses') as string).details;
        return {
                    imageURL:  Utils.joinedImageURL(details.thumbnail.domain, details.thumbnail.basePath, details.thumbnail.qualities[0], details.thumbnail.key),
                    title: details.title,
                    subtitle: details.subtitle,
                    content: details.description,
                 }
    }

    static getCourses() {
        const data = JSON.parse(localStorage.getItem('courses') as string);
        return {
            coursesCount: data.details.coursesCount,
            courses: data.courses,
          }
    }

    static getRelatedCourses() {
        const data = JSON.parse(localStorage.getItem('courses') as string);
        return {
            relatedCourses: data.relatedContent
          }
    }

    static clearStorage() {
        localStorage.clear();
    }


}