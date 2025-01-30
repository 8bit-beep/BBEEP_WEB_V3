type ValidationRule = {
  isValid: boolean;
  errorMessage?: string;
};

export class FormValidator {
  static isNotEmpty(value: string): ValidationRule {
    return {
      isValid: value.trim().length > 0,
      errorMessage: "필수 입력값입니다.",
    };
  }

  static matches(value1: string, value2: string): ValidationRule {
    return {
      isValid: value1.trim() === value2.trim(),
      errorMessage: "값이 일치하지 않습니다.",
    };
  }

  static minLength(value: string, minLength: number): ValidationRule {
    return {
      isValid: value.trim().length >= minLength,
      errorMessage: `최소 ${minLength}자 이상이어야 합니다.`,
    };
  }

  static isCodeMatch(error: any): ValidationRule {
    return {
      isValid: error === 200,
      errorMessage: "인증번호가 맞지 않습니다.",
    };
  }

  static validate(...rules: ValidationRule[]): boolean {
    return rules.every((rule) => rule.isValid);
  }

  static validatePasswordMatch(
    password: string,
    passwordCheck: string
  ): {
    isValid: boolean;
    showError: boolean;
  } {
    const bothFilled = this.validate(
      this.isNotEmpty(password),
      this.isNotEmpty(passwordCheck)
    );

    return {
      isValid: bothFilled && this.matches(password, passwordCheck).isValid,
      showError: bothFilled && !this.matches(password, passwordCheck).isValid,
    };
  }

  static areObjectFieldsFilled<T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean {
    return keys.every((key) => {
      const value = obj[key];
      return typeof value === "string" ? value.trim().length > 0 : false;
    });
  }
}
