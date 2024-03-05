export function limitDescription(description: string | undefined, maxLength: number): string | undefined {
    if (description) {
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + " ...";
      } else {
        return description;
      }
    } else {
      return description;
    }
  }
  