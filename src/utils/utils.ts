export class Utils {
    static joinedImageURL = (domain: string, basePath: string, quality: number, key: string): string => {
        return domain + "/" + basePath + "/" + quality.toString() + "/" + key
    }
}