export default function hyphenatedToCamelCase(name: string): string {
    return name.split('-')
        .map((part, index) => {
            if (index === 0) {
                return part;
            }
            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join('');
}
